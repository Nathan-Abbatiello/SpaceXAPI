import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <script src="jquery-3.7.1.min.js"></script>
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default App;
