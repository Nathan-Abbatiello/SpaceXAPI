import requests
import json
import re
import csv

def process_status_code(status):
    str_status = str(status)
    if (re.search('2..', str_status)):
        print("Successfull api call")
    elif (re.search('4..', str_status)):
        print("Failed Client Error")
    elif (re.search('5..', str_status)):
        print("Failed Server Error")
    else:
        print("Unknown error")

def raw_data(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    return text

# Find multiple occurences of a given attribute
def count_occurrences(attr, split_start = None, split_end = None):
    # add all occurences of the selected attribute to a list 
    attr_list = []
    for x in items:
        attr_list.append(x[attr][split_start:split_end])
    
    # create a dictionary with the attribute key and number of occurences
    attr_dict = {}
    for y in attr_list:
        attr_dict[y] = attr_list.count(y)

    return attr_dict

# save values to csv file
def write_csv(row_names,data_dict):
    writer.writerow(row_names);
    for key, value in data_dict:
        writer.writerow((key, value));

# API call
response = requests.get("https://api.spacexdata.com/v5/launches")

# uncomment to print full api response data
# print (raw_data(response.json()))

# response code
process_status_code(response.status_code)

items = json.loads(raw_data(response.json()))

# output data
print(count_occurrences("launchpad"))
print(count_occurrences("date_local", 0, 4))
# csv
writer = csv.writer(open("./spacex_csv.csv", 'w'))
write_csv(('launchSite', 'launchNum'), count_occurrences("launchpad").items())
write_csv(('year', 'launchNum'), count_occurrences("date_local", 0, 4).items())




