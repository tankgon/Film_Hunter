import React from 'react'
import getAPI from '../api/phim'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function DetailFilm() {
    const { id } = useParams();
    const [listrender, setlistrender] = useState([]);
    const [listrenderTap, setlistrenderTap] = useState([]);

    useEffect(() => {
        const getDetailFilmFC = async () => {
            try {
                const a = await getAPI.getDetailPhim(`${id}`);
                setlistrender(a.data.movie);
                setlistrenderTap(a.data.episodes);
            } catch (error) {
                alert(error);
            }
        };
        getDetailFilmFC();
    },[id])


    // console.log(listrender);
    console.log(listrender);


    
    return (
        <div className="col-md-5 video_agile_player second-top">
            <div className="video-grid-single-page-agileits">
                {/* <video 
                data-video="BXEZFd0RT5Y" 
                src="https://kd.hd-bophim.com/share/669ea75f1504b326e37d132fec021ee8"
                id="video3" 
                preload="auto" 
                playsInline="playsinline" 
                tabIndex="-1" 
                autoPlay="autoplay"  
                controls> 
                    <source src="https://kd.hd-bophim.com/share/669ea75f1504b326e37d132fec021ee8"></source>
                    {/* {listrenderTap[0]?.server_data[0]?.link_embed ? <source src={listrenderTap[0]?.server_data[0]?.link_embed}></source> : null} */}
                    {/* <img src={listrender.thumb_url} alt="" className="img-responsive" /> 
                {/* </video> */} 
                <div className="movie-image_detail"> 
                    <a href="#"><img src={listrender.thumb_url} alt="" /></a>
                    <div className='flex'>
                        <div className='movie-image_detail_down'>Xem Phim</div> 
                        <div className='movie-image_detail_down'>xem Trailer</div> 
                    </div>
                </div>

                <div className="player-text two">
                    <div className="fexi_header">{listrender.name} </div>
                    <div className="fexi_header_para"><span >Tập Phim<label>:</label></span>{listrender.episode_current}</div>
                    <div className="fexi_header_para"><span >Thời Lượng<label>:</label></span>{listrender.time == "" ? "Thời Lượng Đang Cập Nhật" : listrender.time}</div>
                    <div className="fexi_header_para"><span >Thể Loại<label>:</label></span>


                    {listrender.category  ? listrender.category.length > 0 ? (
                        listrender.category.map((item, index) => (
                            <div key={index}>                           
                                {item.name},
                            </div>
                        ))
                    ) : null: null}

                    <div className="fexi_header_para"><span >Diễn Viên<label>:</label></span>{listrender?.actor} </div>
                    <div className="fexi_header_para"><span >Quốc Gia<label>:</label></span>
                        {listrender.country  ? listrender.country.length > 0 ? (
                            listrender.country.map((item, index) => (
                                <div key={index}>                           
                                    {item.name},
                                </div>
                            ))
                        ) : null: null}
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default DetailFilm