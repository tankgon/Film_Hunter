import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getAPI from '../api/phim'

function Header() {
    const [search, setSearch] = useState("");
    const [listrender, setlistrender] = useState([]);


    function removeVietnameseTones(search) {
        search = search.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
        search = search.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
        search = search.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
        search = search.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
        search = search.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
        search = search.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
        search = search.replace(/đ/g,"d");
        search = search.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        search = search.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        search = search.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        search = search.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        search = search.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        search = search.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        search = search.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        search = search.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        search = search.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        search = search.replace(/ + /g," ");
        search = search.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        search = search.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
        return search.toLowerCase().replace(/ /g,"-") ;
    }

    function handleSearchChange(e) {
		setSearch(e.target.value);
	}

    console.log (removeVietnameseTones(search));
    
    function handleSearchKeyUp(e) {
		if (e.keyCode === 13) {
            removeVietnameseTones(search)
		}
	}

   

    // console.log(search)





    return (
        <div id="header">
            <h1 id="logo"><Link to={" "} href="#">MovieGonT</Link></h1>
            <div className="social"> <span>FOLLOW US ON:</span>
                <ul>
                    <li><a className="you" href="#">twitter</a></li>
                    <li><a className="facebook" href="#">facebook</a></li>
                    <li><a className="vimeo" href="#">vimeo</a></li>
                    <li><a className="rss" href="#">rss</a></li>
                </ul>
            </div>
            <div id="navigation">
                <ul>
                    <li><a className="active" href="#">HOME</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">IN THEATERS</a></li>
                    <li><a href="#">COMING SOON</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">ADVERTISE</a></li>
                </ul>
            </div>
            <div id="sub-navigation">
                <ul>
                    <li><a href="#">SHOW ALL</a></li>
                    <li><a href="#">LATEST TRAILERS</a></li>
                    <li><a href="#">TOP RATED</a></li>
                    <li><a href="#">MOST COMMENTED</a></li>
                </ul>
                <div id="search">
                    <form action="#" method="get">
                        <Link to={`search/${search}`} htmlFor="search-field">SEARCH</Link>

                        <input 
                        type="text" 
                        name="search field" 
                        placeholder="Enter search here" 
                        id="search-field" 
                        className="blink search-field"  
                        onChange={handleSearchChange}
                        value={search}
                        onKeyUp={handleSearchKeyUp}
                        />

                    </form>
                </div>
            </div>
        </div>
  )
}

export default Header