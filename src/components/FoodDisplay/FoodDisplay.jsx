import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({catogery}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='Food_Display' id='Food_Display'>
        <h2>Top Dishes near You</h2>
        <div className="display-food-list">
            {food_list.map((item,index)=>{
              if(catogery==="All" || catogery===item.category){
                  return<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              } 
            })}
        </div>
        </div>
  )
}

export default FoodDisplay