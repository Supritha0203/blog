import React from 'react'
import Carou from './Carou'
import Card from './Card'
 import Times from './Times';

import './Card.css'


const Home = () => {
 
  return (
   
    <div>
     
      <div className="container w-75 h-25 d-inline-block"><Carou/>
      </div>     
    {Times.map((times,index)=>(
      
      <Card aos="fade-up" aos_offset="500" heading={times.theme} description={times.description} firstpic={times.image1} secondpic={times.image2} key={index}/>
     
    ))}
    </div>
 
    
  )
}

export default Home

