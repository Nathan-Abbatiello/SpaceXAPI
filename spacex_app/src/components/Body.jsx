import spacexAPI from "./spacexAPI";
import React from "react";

function Body() {
  console.log(spacexAPI("launchpad"));
  console.log(spacexAPI("date_local", true));

  var launchSiteData = {
    "5e9e4502f5090995de566f86": 5,
    "5e9e4501f509094ba4566f84": 112,
    "5e9e4502f509092b78566f87": 30,
    "5e9e4502f509094188566f88": 58,
  };
  var launchData = {
    2006: 1,
    2007: 1,
    2008: 2,
    2009: 1,
    2010: 2,
    2012: 2,
    2013: 3,
    2014: 6,
    2015: 7,
    2016: 9,
    2017: 18,
    2018: 21,
    2019: 13,
    2020: 26,
    2021: 31,
    2022: 62,
  };
  console.log("data");
  console.log(launchSiteData);
  var msgContent = (
    <>
      <div className="row align-items-center">
        <div className="col">
          <h1>No Data</h1>
        </div>
      </div>
    </>
  );
  const msg = launchSiteData.length === 0 && msgContent;

  return (
    <>
      {msg}
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="display-box">
              <div className="row align-items-center">
                <div className="col">
                  <h1>Year</h1>
                </div>
                <div className="col">
                  <h1>Number of Launches</h1>
                </div>
              </div>
              {Object.entries(launchData).map(([key, value]) => (
                <div className="row align-items-center">
                  <div className="col">
                    <h3 key={key}>{key}</h3>
                  </div>
                  <div className="col">
                    <h3>{value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col">
            <div className="display-box">
              <div className="row align-items-center">
                <div className="col">
                  <h1>Launch Site</h1>
                </div>
                <div className="col">
                  <h1>Number of Launches</h1>
                </div>
              </div>
              {Object.entries(launchSiteData).map(([key, value]) => (
                <div className="row align-items-center">
                  <div className="col">
                    <h3 key={key}>{key}</h3>
                  </div>
                  <div className="col">
                    <h3>{value}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <div className="col">
  {dataAPI.map((item) => (
    <li
      classNameName="list-item"
      onClick={(e) => console.log(item)}
      key={item}
    >
      {item}
    </li>
  ))}
  </div> */

export default Body;
