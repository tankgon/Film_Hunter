import React from 'react'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import getAPI from '../api/phim'

function Header() {
    const [search, setSearch] = useState("");
    const [listrender, setlistrender] = useState([]);

    function handleSearchChange(e) {
		setSearch(e.target.value);
	}

    
    function handleSearchKeyUp(e) {
		if (e.keyCode === 13) {

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