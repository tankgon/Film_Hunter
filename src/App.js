//redux
import { Counter } from "./features/counter/Counter";
//css
import "./App.css";
import "./assets/ie6.css";
import "./assets/style.css";
//main
import Layout from "./main/layout";
//layout
import Home from "./layout/Home";
import New from "./layout/New";
import Chap from "./layout/Chap";
import Search from "./layout/Search";
//component
import Bug from "./component/Bug";
import DetailFilm from "./component/DetailFilm";
import Watching from "./component/Watching";
//frameword
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/Film_Hunter" element={<Layout />}>
        <Route path="" element={<Home />}/>
        
        <Route path="/search/:slug" element={<Search />} />



        <Route path="/Film/:id" element={<DetailFilm />} />

        <Route path="/chap/:id" element={<Chap />}>
          <Route path="/chap/:id/:tap" element={<Watching />} />
        </Route>

        {/* High Order Component */}

        {/* <Route path='/watching/:id' element={<Chap/>}/> */}

        <Route path="/*" element={<Bug />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
