import React from "react";
import { useEffect, useState } from "react";
import getAPI from "../api/phim";
import { Link, useParams, Outlet } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function Comingsoon() {
    const [listFilmDetail, setListFilmDetail] = useState([]);
    const [listrender, setlistrender] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
      const getPhimFC = async () => {
        try {
          const getPage = await getAPI.getPagePhim(); 
          setlistrender(getPage.data.pagination)
  
          const response = await getAPI.getPagePhim(`${page}`);
          const listFilm = response.data.items;
          const listDetail = await Promise.all(
            listFilm.map((itemFilm) => {
              return getAPI.getDetailPhim(itemFilm.slug);
            })
          );
          setListFilmDetail(listDetail);
        } catch (err) {
          const getPage = await getAPI.getPagePhim(); 
          setlistrender(getPage.data.pagination)
  
          const response = await getAPI.getPagePhim(`${page + 1}`);
          const listFilm = response.data.items;
          const listDetail = await Promise.all(
            listFilm.map((itemFilm) => {
              return getAPI.getDetailPhim(itemFilm.slug);
            })
          );
          setListFilmDetail(listDetail);
          // alert("thanh")
        }        
      };
      getPhimFC();
    }, [page]);
    

    const renderFilm = () => {
      if (listFilmDetail) {
        return listFilmDetail.map((item, index) => { 
          console.log(item.data.movie.status);        
          return (     
            ((item.data.movie.episode_current) === "trailer" ? 
            alert("thanh"): null)
            );
          });
        }
    };
  return (
    <div>
      {renderFilm()}
    </div>
  )
}

export default Comingsoon