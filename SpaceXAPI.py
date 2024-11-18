import requests
import json
import re

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
    for x in item_dict:
        attr_list.append(x[attr][split_start:split_end])
    
    # create a dictionary with the attribute key and number of occurences
    attr_dict = {}
    for y in attr_list:
        attr_dict[y] = attr_list.count(y)

    return attr_dict

response = requests.get("https://api.spacexdata.com/v5/launches")
process_status_code(response.status_code)
item_dict = json.loads(raw_data(response.json()))

print(count_occurrences("launchpad"))
print(count_occurrences("date_local", 0, 4))