import React from 'react'
import './Card.css'
//import Carousel from 'react-bootstrap/Carousel';


function Card(props) {
  console.log(props.firstpic)
  console.log(props.secondpic)
  return (
    <>
    <div className="float-container">

<div className="float-child shadow-lg p-3 mb-5 bg-body">
  <h1 className="heading">{props.heading}</h1>
  <div className="desc overflow-auto">{props.description}</div>
</div>

<div class="float-child shadow-lg p-3 mb-5 bg-body">
  
<img src={props.firstpic} alt="one"/>
<img src={props.secondpic} alt="two"/>
</div>

</div>
    </>
  )
}

export default Card
