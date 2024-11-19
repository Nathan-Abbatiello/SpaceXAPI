import spacexAPI from "./spacexAPI";

function Body() {
  var csvData = spacexAPI();
  var msgContent = (
    <>
      <div className="row align-items-center">
        <div className="col">
          <h1>No Data</h1>
        </div>
      </div>
    </>
  );
  const msg = csvData.length === 0 && msgContent;

  return (
    <>
      {msg}
      <div className="container text-center">
        <div className="row align-items-center">
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

              {csvData.forEach((item) => {
                <div className="row align-items-center">
                  <p onClick={(e) => console.log(item)} key={item}>
                    {item}
                  </p>
                </div>;
              })}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* <div className="col">
  {csvData.map((item) => (
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
