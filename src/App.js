//redux
import { Counter } from './features/counter/Counter';
//css
import './App.css';
//component
import Home from './layout/home';
//frameword
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path= '/' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
