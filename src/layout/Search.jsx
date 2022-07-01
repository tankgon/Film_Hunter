import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getAPI from '../api/phim'

function Search() {
    const { id, slug } = useParams();
    const [listFilmDetail, setListFilmDetail] = useState([]);



    useEffect(() => {
        const getPhimFC = async () => {
          try {
            const response = await getAPI.getPhim();
            const listFilm = response.data.items;
            
            const listDetail = await Promise.all(listFilm.map((itemFilm) => {
              const thanh = getAPI.getDetailPhim(itemFilm.slug);
              return thanh;
            }));
            setListFilmDetail(listDetail)

            
          }catch (err){
            alert (err)
          }
        };
        getPhimFC();
      }, []);


    console.log(listFilmDetail);
    // alert(listrender);

    
    return (
        <div>Search</div>
    )
}

export default Search