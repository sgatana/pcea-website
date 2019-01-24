import React from 'react'
import { Link } from 'react-router-dom'


export default () => <div className="row">
  <div className="col-md-6">
    <h5 className="card-title text-center header">Latest Sermons</h5>
    <div className="card zoom">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xp4p8ukOtgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="pcea"></iframe>
      <div className="card-body column-page">
        <p className="card-text"><i className="fas fa-user events"></i> &nbsp; By Church Choir</p>
        <p>God's Grace Is Sufficient</p>
        <Link to="#" className="btn btn-outline-primary card-button">Subscribe</Link>
      </div>
    </div>
  </div>
  <div className="col-md-6">
  <h5 className="card-title text-center header">Upcoming Events</h5>
    <div className="row">
      <div className="col-md-6">
        <div className="card zoom">
          <div className="card-body">
            <h6 className="card-title text-center header">PCMF Sunday 4 Nov, 2018</h6>
            <p><i className="fas fa-user events"></i> By Pastor: Kimani</p>
            <p><i class="fas fa-map-marker-alt events"></i> PCEA Mukuyu Church</p>
            <p><i class="fas fa-clock events"></i> 11:00 Am</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card zoom">
          <div className="card-body">
            <h6  className="card-title text-center header">Women' Guild Sunday 4 Nov, 2018</h6>
            <p><i className="fas fa-user events"></i> By Pastor: Kimani</p>
            <p><i className="fas fa-map-marker-alt events"></i> PCEA Mukuyu Church</p>
            <p><i className="fas fa-clock events"></i> 11 : 00 Am</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card zoom">
          <div className="card-body">
            <h6 className="card-title text-center header">Youth Sunday 4 Nov, 2018</h6>
            <p><i className="fas fa-user events"></i> By Pastor: Kimani</p>
            <p><i className="fas fa-map-marker-alt events"></i> PCEA Mukuyu Church</p>
            <p><i className="fas fa-clock events"></i> 11 : 00 Am</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card zoom">
          <div className="card-body">
            <h6 className="card-title text-center header">Xmas Sunday 25 Dec, 2018</h6>
            <p><i className="fas fa-user events"></i> By Pastor: Kimani</p>
            <p><i class="fas fa-map-marker-alt events"></i> PCEA Mukuyu Church</p>
            <p><i class="fas fa-clock events"></i> 11 : 00 Am</p>
          </div>
        </div>
      </div>
    </div>
  {/* <Link to="#" className="btn btn-outline-primary card-button">Join Us</Link> */}
  </div>

</div>