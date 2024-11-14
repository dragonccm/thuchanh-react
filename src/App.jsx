import './App.css';
import {
  Hello,
} from "./Hello"
import {
  Menu
} from "./Header"
import Router from "./Router"

function App() {
  return (

    <div className="App">
      <Hello />
      <Menu />
      <Router/>
    </div>
  );
}

export default App;
