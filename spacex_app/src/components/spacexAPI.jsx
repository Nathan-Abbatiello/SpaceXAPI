import axios from "axios";

async function spacexAPI() {
  axios({
    method: "get",
    url: "https://api.spacexdata.com/v5/launches",
  }).then(function (response) {
    console.log(response.data);
    console.log(countOccurrences(response.data, "launchpad"));
  });
}

function countOccurrences(data, attr) {
  var attrArray = [];
  for (let x = 0; x < data.length; x++) {
    attrArray.push(data[x][attr]);
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
