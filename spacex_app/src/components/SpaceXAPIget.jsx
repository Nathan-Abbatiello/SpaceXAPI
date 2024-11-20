import React from "react";
import axios from "axios";
import { useState } from "react";

// calls spacex API and returns populated rows with data
export default function SpaceXAPIget(props) {
  const [dataTest, setData] = useState("");

  axios.get("https://api.spacexdata.com/v5/launches").then((response) => {
    setData(countOccurrences(response.data, props.attr));
  });

  return (
    <>
      {Object.entries(dataTest).map(([key, value]) => (
        <div className="row align-items-center">
          <div className="col">
            <h3 key={key}>{key}</h3>
          </div>
          <div className="col">
            <h3>{value}</h3>
          </div>
        </div>
      ))}
    </>
  );
}

// returns an object (attribute: attribute count)
function countOccurrences(data, attr) {
  var attrArray = [];
  // add all occurences of the selected attribute to an array
  for (let x = 0; x < data.length; x++) {
    attrArray.push(data[x][attr].split("-", 1));
  }

  // create an object with the attribute key and number of occurences
  var count = {};
  attrArray.forEach((ele) => {
    if (count[ele]) {
      count[ele] += 1;
    } else {
      count[ele] = 1;
    }
  });
  return count;
}
