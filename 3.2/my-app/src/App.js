import logo from './logo.svg';
import './App.css';

function App() {
  function activateLasers() {
    window.alert("Hello, world!");
  }

  return (
    <button type="button" onClick={activateLasers}>Click Me!</button>
  );
}

export default App;
