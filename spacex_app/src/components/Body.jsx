import SpaceXAPIget from "./SpaceXAPIget";

function Body() {
  return (
    <>
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
