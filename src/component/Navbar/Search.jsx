import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
import { IoSearchOutline } from "react-icons/io5";
function Search() {
  return (
    <div className={style.search_box}>
        <input type="text" className={style.searchText} placeholder = "Type to Search.."/>
        <Link to=''>
          <IoSearchOutline className={style.search_of_input} size = "25px" color='#3C4852'/>
        </Link>
    </div>
  )
}
export default Search;
