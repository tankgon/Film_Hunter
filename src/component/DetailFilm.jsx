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
    })
    // console.log(listrender);
    console.log(listrenderTap[0]?.server_data[0]?.link_embed);


    
    return (
        <div className="col-md-5 video_agile_player second-top">
            <div className="video-grid-single-page-agileits">
                <video 
                data-video="BXEZFd0RT5Y" 
                // src={listrenderTap[0]?.server_data[0]?.link_embed}
                id="video3" 
                preload="auto" 
                playsInline="playsinline" 
                tabIndex="-1" 
                autoPlay="autoplay"  
                controls> 
                    {listrenderTap[0]?.server_data[0]?.link_embed ? <source src={listrenderTap[0]?.server_data[0]?.link_embed}></source> : null}
                    {/* <img src="images/44.jpg" alt="" className="img-responsive" />  */}
                </video>
                
            </div>

            <div className="player-text two">
                <p className="fexi_header">Storks </p>
                <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span>Starring: Andy Samberg, Jennifer Aniston, Ty Burrell
                Storks Official Trailer 3 (2016) - Andy Samberg Movie  the company's top delivery stork, lands in hot water when the Baby Factory produces an adorable....... </p>
                <p className="fexi_header_para"><span >Release On<label>:</label></span>Aug 1, 2016 </p>
                
                <p className="fexi_header_para">
                    <span>Genres<label>:</label> </span>
                    <a href="genre.html">Drama</a> | 
                    <a href="genre.html">Adventure</a> | 
                    <a href="genre.html">Family</a>								
                </p>
                <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                    <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                </p>
            </div>

        </div>
    )
};

export default DetailFilm