import React from 'react'
import { useEffect, useState } from "react"
import getAPI from '../api/phim'
import { Link, useParams } from "react-router-dom"
import { Outlet } from 'react-router-dom';
import axios from "axios";

function Home() {
  const [listrender, setlistrender] = useState([]);
  const [listrenderDetail, setListrenderDetail] = useState([]);
  const [namePhim, setNamePhim] = useState([]);
  const { id } = useParams();
  const [listFilmDetail, setListFilmDetail] = useState([]);
  

  useEffect(() => {
    const getPhim = async () => {
      try {
        const response = await getAPI.getPhim();
        const listFilm = response.data.items;
        const listDetail = await Promise.all(listFilm.map((itemFilm) => {
          return getAPI.getDetailPhim(itemFilm.slug);
        }));
        setListFilmDetail(listDetail);
      }catch (err){
        alert (err)
      }
    };
    getPhim();
  }, []);

  console.log(listFilmDetail);


  const renderRestaurant = () => {
    if (listFilmDetail) {
      return listFilmDetail.map((item, index) => {
        return (         
          <div 
            key={index}
            className="box">
              <div className="head">
                <div className="movie">
                  <div className="movie-image"> 
                    <a href="#"><img src={item.data.movie.thumb_url} alt="" /></a> 
                  </div>
                </div>

                <div className='flex'> 
                  <div>
                    <div className='Item_name'>{item.data.movie.name}</div>
                    <div>({item.data.movie.origin_name})</div> 
                    <div className="rating">
                        <span className="button-49">Xem Phim</span> 
                    </div> 
                  </div>
                  <p className="text-right"><a href="#">See all</a></p>
                </div>
                
                
                  <div class="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <thead>
                        <tr>
                          <th>Thể Loại</th>
                          <th>Diễn viên</th>
                          <th>Tình trạng</th>
                          <th>Quốc gia</th>
                          <th>Ngày ra mắt</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div class="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tbody>
                        <tr>
                          <td>{item.data.movie.category?.name}</td>
                          <td>{item.data.movie.actor}</td>
                          <td>{item.data.movie.episode_current}</td>
                          <td>{item.data.movie.country?.name}</td>
                          <td>{item.data.movie.modified.time}</td>
                        </tr>
                      </tbody>
                    </table>
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
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a className="active" href="#">1</a>
          <a href="#">2</a>
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