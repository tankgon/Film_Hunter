import React from 'react'
import getAPI from '../api/phim'
import { Link, useParams } from "react-router-dom";
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

  console.log(id);
  return (
    <div>
      {listrenderTap ? listrenderTap.map((item,index)=>{
        return(                      
          <iframe key={index} src={item.server_data[0].link_embed} width="100%" height="500px" controls>a</iframe>                                              
      )})
      :null}
    </div>
  )
}

export default Watching