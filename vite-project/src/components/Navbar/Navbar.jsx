import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navber = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt=''></img>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browser</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} className='icons'/>
        <p>Children</p>
        <img src={bell_icon} className='icons'/>
        <div className='navbar_profile'>
          <img src={profile_img} className='profile'/>
          <img src={caret_icon} />
          <div className='dropdown'>
            <p>Sign Out Of Netflix</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default Navber
