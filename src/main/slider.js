import React from 'react'
import Church from '../images/church.jpg'
import Slider from '../images/slider.jpg'


export default () => <div className="slider">
  <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active slider">
        <img className="d-block w-100" src={Church} alt="Second slide" />
        <div className="carousel-caption d-none d-md-block  slider-back">
          <h4 className="caption-header">We are Dedicated to Service and Ministry</h4>
          <p>Welcome to PCEA Mugutha Church</p>
        </div>
      </div>
      <div className="carousel-item slider">
        <img className="d-block w-100" src={Church} alt="Second slide" />
        <div className="carousel-caption d-none d-md-block slider-back">
          <h4>PCEA CHurch</h4>
          <p>Welcome to PCEA Mugutha Church</p>
        </div>
      </div>
      <div className="carousel-item slider">
        <img className="d-block w-100" src={Slider} alt="Second slide" />
        <div className="carousel-caption d-none d-md-block  slider-back">
          <h4 className="caption-header">The Word of God</h4>
          <p>We come to serve and believing God's word and spirit</p>
        </div>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>