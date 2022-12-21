import React from 'react'
import './Card.css'
import Carousel from 'react-bootstrap/Carousel';
import { motion } from "framer-motion";


function Card(props) {

  return (
    <>
    <motion.div data-aos={props.aos} data-aos-offset={props.aos_offset} >
          <h1 className="heading">{props.heading}</h1>

    <div className="float-container ">

<div className="float-child shadow-lg p-3 mb-5 bg-body d-flex justify-content-center des">
  <div className="desc overflow-auto"><p>{props.description}</p></div>
</div>

<div className="pict float-child shadow-lg p-3 mb-5 bg-body">
  
<Carousel>
<Carousel.Item>
    <div >
      <img
        className="d-block w-100 "
        src={props.firstpic}
        alt="First slide"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div >
      <img
        className="d-block w-100"
        src={props.secondpic}
        alt="Second slide"
      />      
      </div>
    </Carousel.Item>
</Carousel>
</div>

</div>

</motion.div>
    </>
  )
}

export default Card
