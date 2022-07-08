import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getAPI from '../api/phim'

function Search() {
  const { id, slug } = useParams();
  const [listrender, setlistrender] = useState([]);

  useEffect(() => {
    const thanh = (slug) => {
        slug = slug.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        slug = slug.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        slug = slug.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        slug = slug.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        slug = slug.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        slug = slug.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        slug = slug.replace(/đ/g,"d");
        slug = slug.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        slug = slug.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        slug = slug.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        slug = slug.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        slug = slug.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        slug = slug.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        slug = slug.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        slug = slug.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        slug = slug.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        slug = slug.replace(/ + /g," ");
        slug = slug.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        slug = slug.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        return slug.toLowerCase().replace(/ /g,"-") ;
    }
    const getDetailFilmFC = async () => {
        try {
            const a = await getAPI.getDetailPhim(`${thanh(slug)}`);
            setlistrender(a.data.movie);
        } catch (error) {
            alert(error);
        }
    };
    getDetailFilmFC();
    console.log(thanh(slug));

  },[id])

  console.log(id);
  
  const thanh = (slug) => {
    slug = slug.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    slug = slug.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    slug = slug.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    slug = slug.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    slug = slug.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    slug = slug.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    slug = slug.replace(/đ/g,"d");
    slug = slug.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    slug = slug.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    slug = slug.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    slug = slug.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    slug = slug.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    slug = slug.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    slug = slug.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    slug = slug.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    slug = slug.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    slug = slug.replace(/ + /g," ");
    slug = slug.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    slug = slug.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return slug.toLowerCase().replace(/ /g,"-") ;
}

 
    // alert(listrender);
    
    return (
        <div className="col-md-5 video_agile_player second-top">
            <div className="video-grid-single-page-agileits">

                    {/* {listrenderTap[0]?.server_data[0]?.link_embed ? <source src={listrenderTap[0]?.server_data[0]?.link_embed}></source> : null} */}

                <div className="movie-image_detail"> 
                    <a href="#"><img src={listrender.thumb_url} alt="" /></a>
                    <div className='flex'>
                        <Link to={`/chap/${thanh(slug)}`} className='movie-image_detail_down'>Xem Phim</Link> 
                        
                        <div className='movie-image_detail_down'>Xem Trailer</div>
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


            {/* <img src={listrender.thumb_url} alt="" className="img-responsive" />  */}

        </div>
    )
}

export default Search