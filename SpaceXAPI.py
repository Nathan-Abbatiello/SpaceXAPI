import requests
import json

response = requests.get("https://api.spacexdata.com/v5/launches")

def raw_data(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    return text

item_dict = json.loads(raw_data(response.json()))

# Find multiple occurences of a given attribute
def concat(attr, split_start = None, split_end = None):
    years_list = []
    for x in item_dict:
        years_list.append(x[attr][split_start:split_end])
    
    year_dict = {}
    for year in years_list:
        year_dict[year] = years_list.count(year)

    return year_dict

# def format_output(data = None):
#     print(concat("launchpad").keys())

# format_output()
print(concat("launchpad"))
print(concat("date_local", 0, 4))