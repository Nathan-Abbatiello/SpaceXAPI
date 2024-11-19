import rocket from "../rocket.svg";

function Header() {
  return (
    <>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <img src={rocket} className="App-logo" alt="logo" />
          </div>
          <div className="col-6">
            <h1 className="title">Space X API Dashboard</h1>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
export default Header;
