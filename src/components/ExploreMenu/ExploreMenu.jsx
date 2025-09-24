import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../Assets/frontend_assets/assets'
const ExploreMenu = ({catogery,setcatogery}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
      <h1>Explore our menu</h1>
    <p className='ExploreMenu-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam minima libero numquam? Explicabo, vitae placeat numquam deleniti voluptas, nesciunt provident illo tempore pariatur quo optio, minus officiis dolorem. Odit, ratione!</p>
<div className="ExploreMenu-list">
    {menu_list.map((item,index)=>{
        return(
            <div onClick={()=>{setcatogery(prev=>prev===item.menu_name?"All":item.menu_name)}} className="ExploreMenu_ListItems" key={index}>
<img className={catogery===item.menu_name?"active":""} src={item.menu_image} alt=''/>
<p>{item.menu_name}</p>

            </div>

        )
    })}
</div>
    <hr />
    </div>
  )
}

export default ExploreMenu