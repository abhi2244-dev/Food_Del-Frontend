import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../Assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
function Navbar({setshowlogin}) {
    const [menu,setMenu]=useState("Menu");
    const{getTotal, token, setToken}=useContext(StoreContext)

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    }
    return (
        <div className="Nav">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="Nav-Menu">
        <Link to='/' onClick={()=>{
            setMenu("Home")
        }} className={menu==="Home"? "active":""}>Home</Link>
        <a href='#ExploreMenu' onClick={()=>{
            setMenu("Menu")
        }} className={menu==="Menu"? "active":""}>Menu</a>
        <a href='#AppDownload' onClick={()=>{
            setMenu("Mobile-App")
        }} className={menu==="Mobile-App"? "active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>{
            setMenu("Contact-us")
        }} className={menu==="Contact-us"? "active":""}>Contact-us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt=''/>
        <div className="navbar-search-icon">
          <Link to='/cart'>  <img src={assets.basket_icon} alt=''/></Link>
            <div className={getTotal()===0?"":"dot"}>

            </div>
            </div>
            {!token ? 
                <button onClick={()=>{
                    setshowlogin(true)
                }}>Sign-in</button>
                :
                <div className="navbar-profile">
                    <img src={assets.profile_icon} alt="" />
                    <ul className="nav-profile-dropdown">
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>
                </div>
            }
      </div>
        </div>
    )
}

export default Navbar
