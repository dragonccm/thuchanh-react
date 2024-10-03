import './App.css';
import {
  Hello,
} from "./Hello"
import {
  Menu
} from "./Header"
import Car from "./Car"
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import Hello1 from "./Hello1"
function App() {
  return (

    <div className="App">
      <Hello />
      <Menu />
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="hello" element={<Hello1 name={"hai dù"} />} />
          <Route path="car" element={<Car />} />
          <Route path="*" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
