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
import Page from "./layout/Page";
import New from "./layout/New";
import FilmPage from "./layout/FilmPage";
import Chap from "./layout/Chap";
//component
import Bug from "./component/Bug";
import DetailFilm from "./component/DetailFilm";
import Watching from "./component/Watching";
//frameword
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}>
          <Route path="" element={<Page />} />
        </Route>

        <Route path="/:id" element={<FilmPage />}>
          <Route path="" element={<Page />} />
        </Route>

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
