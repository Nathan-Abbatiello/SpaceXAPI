# SpaceXAPI Project
Retrieves data from [SpaceX API](https://github.com/r-spacex/SpaceX-API) for number of launches per launch pad and number of launches per year. 


![Space x logo](https://thumbs.dreamstime.com/b/illustration-deep-space-spacex-logo-over-vector-planet-195641418.jpg)
## SpaceXAPI.py
This is a tool used for running with python3, it will retrieve the api data, give processed status code responses, write the formatted data to the command line and save the most recent formatted data to a csv file.

**Run:**

Install Dependencies (ensure they are installed using pip, some will come installed with python3):
    requests, json, re, csv

Run using python3 enabled cmd or python cmd

## spaceX_app
This is a React application which pulls an API using Axios, this is then processed and displayed to the web application.

**Run:**
Install Dependencies: npm

Using dev files: 
```
cd spacex_app
npm install
npm start 
```
Using build file:
```
cd spacex_app
npm install -g serve
serve -s build
```
