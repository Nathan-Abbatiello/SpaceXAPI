import requests
import json

response = requests.get("https://api.spacexdata.com/v5/launches")
# print(response.status_code)


def formatPrint(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)

formatPrint(response.json())
text = json.dumps(response.json(), sort_keys=True, indent=4)

item_dict = json.loads(text)

years_list = []
for x in item_dict:
    years_list.append(x["date_local"][:4])

year_dict = {}
for year in years_list:
    year_dict[year] = years_list.count(year)


print(year_dict)
# print (len(item_dict))