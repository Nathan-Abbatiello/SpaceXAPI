import SpaceXAPIget from "./SpaceXAPIget";

function Body() {
  var launchSiteData = {
    "5e9e4502f5090995de566f86": 5,
    "5e9e4501f509094ba4566f84": 112,
    "5e9e4502f509092b78566f87": 30,
    "5e9e4502f509094188566f88": 58,
  };

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
              <SpaceXAPIget attr="date_local" />
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
              <SpaceXAPIget attr="launchpad" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
