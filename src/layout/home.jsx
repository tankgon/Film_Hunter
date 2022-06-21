import React from 'react'
import { useEffect, useState } from "react"
import getAPI from '../api/phim'
import getAPIDetail from '../api/phim'
import { Link, useParams } from "react-router-dom"
import { Outlet } from 'react-router-dom';

function Home() {
  const [listrender, setlistrender] = useState([]);
  const [listrenderDetail, setListrenderDetail] = useState([]);
  const [namePhim, setNamePhim] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPhim = async () => {
      try {
        const a = await getAPI.getPhim(`${id}`);
        setlistrender(a.data.items);
      }catch (err){
        alert (err)
      }
    };
    getPhim();
  }, []);

 
  useEffect(() => {
    const getDetail = async () => {
      try {
        const a = await getAPI.getDetailPhim(`${id}`);
        setlistrender(a.data.items);
      }catch (err){
        alert (err)
      }
    };
    getDetail();
  }, []);
  console.log(listrenderDetail);



  const renderRestaurant = () => {
    if (listrender) {
      return listrender.map((item, index) => {
        return (
          <div 
          key={index}
          className="box">
            <div className="head">
              <div className="movie">
                <div className="movie-image"> 
                  <span className="play">
                    <span className="name">{item?.name}</span>
                  </span> 
                  <a href="#"><img src="#" alt="" /></a> 
                </div>
              </div>

              <div className='flex'> 
                <div>
                  <div className='Item_name'>{item?.name}</div>
                  <div>({item?.origin_name})</div> 
                </div>
                <p className="text-right"><a href="#">See all</a></p>
              </div>
              
              <div className="rating">
                  <p>RATING</p>
                  <div className="stars">
                    <div className="stars-in"> </div>
                  </div>
                  <span className="comments">12</span> 
              </div>
              
              
            </div>
            
            <div className="cl">&nbsp;</div>
          </div>
        );
      });
    }
  };

  
  return (
    <div id="main">
      <div id="content">
        {renderRestaurant()}
      </div>
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a class="active" href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
    </div>
    </div>
  )
}

export default Home