import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import blog from './blog.jpg';
import blog2 from './blog2.jpg'
import blog3 from './blog3.jpg'
function Carou() {
  return (
    <Carousel>
      
    <Carousel.Item>
    <div className="shadow p-3 mb-5 rounded">
      <img
        className="d-block w-100 "
        src={blog}
        alt="First slide"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="shadow p-3 mb-5 rounded">
      <img
        className="d-block w-100"
        alt="Second slide"
        src={blog2}
      />      
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="shadow p-3 mb-5 rounded">
      <img
        className="d-block w-100"
src={blog3}        alt="Third slide"
      />
      </div>
    </Carousel.Item>
    
  </Carousel>
  );
}

export default Carou
