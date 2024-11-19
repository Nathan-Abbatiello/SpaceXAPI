import axios from "axios";

async function spacexAPI(attr, split) {
  axios({
    method: "get",
    url: "https://api.spacexdata.com/v5/launches",
  }).then(function (response) {
    console.log(countOccurrences(response.data, attr, split));
  });
}

function countOccurrences(data, attr, split) {
  var attrArray = [];
  for (let x = 0; x < data.length; x++) {
    // if (split != null) {

    // }
    attrArray.push(data[x][attr].split("-", 1));

    // else
    // attrArray.push(data[x][attr]);
  }

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

export default spacexAPI;
