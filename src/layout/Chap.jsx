import React from 'react'
import getAPI from '../api/phim'
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function Watching() {
    const { id } = useParams();

    const [listrenderTap, setlistrenderTap] = useState([]);

    useEffect(() => {
        const getDetailFilmFC = async () => {
            try {
                const a = await getAPI.getDetailPhim(`${id}`);

                setlistrenderTap(a.data.episodes);
            } catch (error) {
                alert(error);
            }
        };
        getDetailFilmFC();
    },[id])



    const arrFilm = () => {
        if(listrenderTap){
            return listrenderTap.map((item) => {
                return(                
                    item.server_data.map((item,index)=>{
                        return(                          
                            <button key={index} className="box_link">
                                <Link to={`/chap/${id}/${item.name}`}  >tập: {item.name}</Link>
                            </button>                         
                        )                    
                    })
                )
            })
        }
    }

  return (
    <div>
      <div className="arrFilm">
        {arrFilm()}
      </div>
      <Outlet/>
    </div>
  )
}

export default Watching


