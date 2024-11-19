import axios from "axios";

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function spacexAPI() {
  axios({
    method: "get",
    url: "https://api.spacexdata.com/v5/launches/latest",
  }).then(function (response) {
    console.log(response.data);
  });
}

export default spacexAPI;
