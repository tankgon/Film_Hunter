//redux
import { Counter } from './features/counter/Counter';
//css
import './App.css';
import './assets/ie6.css'
import './assets/style.css'
//component
import Layout from './main/layout'
import Home from './layout/Home'
//frameword
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
