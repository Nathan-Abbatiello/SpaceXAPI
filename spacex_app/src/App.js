import rocket from './rocket.svg';
import './App.css';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <script src="jquery-3.7.1.min.js"></script>
      <header className="App-header">
        <img src={rocket} className="App-logo" alt="logo" />
      </header>
      <div>
        <Display />
      </div>
    </div>
  );
}

export default App;
