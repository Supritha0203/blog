import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carou() {
  return (
    <Carousel>
      
    <Carousel.Item>
    <div className="shadow p-3 mb-5 rounded">
      <img
        className="d-block w-100 "
        src="https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2F1659421171968-Image-5%20(15).png&w=750&q=75"
        alt="First slide"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="shadow p-3 mb-5 rounded">
      <img
        className="d-block w-100"
        src="https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2F1659421327219-Image-7%20(9).png&w=750&q=75"
        alt="Second slide"
      />      
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="shadow p-3 mb-5 rounded">
      <img
        className="d-block w-100"
        src="https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2F1659421274074-Image-6%20(12).png&w=750&q=75"
        alt="Third slide"
      />
      </div>
    </Carousel.Item>
    
  </Carousel>
  );
}

export default Carou
