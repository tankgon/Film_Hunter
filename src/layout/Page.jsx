import React from 'react'
import { useEffect, useState } from "react"
import getAPI from '../api/phim'
import { Link, useParams } from "react-router-dom"

function Home() {
  const [listrender, setlistrender] = useState([]);
  

  useEffect(() => {
    const getPhim = async () => {
      try {
        const getPage = await getAPI.getPagePhim();
        setlistrender(getPage.data.pagination)
      }catch (err){
        alert (err)
      }
    };
    getPhim();
  }, []);

  console.log(  listrender)

  const getPage = () => {

  } 

    
    return (
      <div className="box">
        <div className="pagination">
          <a href="#">&laquo;</a>
          <Link to={"1"} href="">1</Link>
          <Link to={"2"} href="">2</Link>
          <Link to={"3"} href="">3</Link>
          <a href="#">&raquo;</a>
        </div>
      </div>
  )
}

export default Home