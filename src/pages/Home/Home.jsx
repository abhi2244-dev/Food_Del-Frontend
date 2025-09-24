import React, { useState } from 'react'
import './Home.css'
import Header from  '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDOwnload from '../../components/AppDownload/AppDOwnload'
function Home() {
  const[catogery,setcatogery]=useState("All")
  return (
    <div className="home">
      <Header/>
      <ExploreMenu catogery={catogery} setcatogery={setcatogery}/>
      <FoodDisplay catogery={catogery}/>
      <AppDOwnload/>
    </div>
  )
}
export default Home