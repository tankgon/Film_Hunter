import React from 'react'
import { useEffect, useState } from "react"
import getAPI from '../api/phim'
import { Link, useParams } from "react-router-dom"
import { Outlet } from 'react-router-dom';


function Home() {
  const [listrender, setlistrender] = useState([]);
  const [listrenderDetail, setListrenderDetail] = useState([]);
  const [namePhim, setNamePhim] = useState([]);
  const { id } = useParams();
  const [listFilmDetail, setListFilmDetail] = useState([]);
  

  useEffect(() => {
    const getPhim = async () => {
      try {
        const response = await getAPI.getPagePhim();
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
                </div>
                {(item.data.movie.episode_current) === "Trailer" ? <p className="text-right hot_detail error mx-auto">Sắp ra mắt</p>: null}
                
                
                  <div className="tbl-header">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <thead>
                        <tr>
                          <th>Thể Loại</th>
                          <th>Diễn viên</th>
                          <th>Tình trạng</th>
                          <th>Quốc gia</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <table cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          {item.data.movie.type === "hoathinh" ? <td>Hoạt Hình</td> : null}
                          {item.data.movie.type === "series" ? <td>Phim Bộ</td> : null}
                          {item.data.movie.type === "tvshows" ? <td>TV Shows</td> : null}
                          {item.data.movie.type === "single" ? <td>Phim Lẻ</td> : null}

                          <td className='max_text'>{item.data.movie.actor}</td>
                          <td>{item.data.movie.episode_current}</td>
                          <td>{item.data.movie.country[0]?.name}</td>
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
          <a 
          // className="active" 
          href="/1">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
        <Outlet/>
    </div>
  )
}

export default Home