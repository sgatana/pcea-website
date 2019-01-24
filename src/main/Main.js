import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Youth from '../images/youths.jpg'
import Slider3 from '../images/slider3.jpg'
import Preach from '../images/preach.jpg'
import Church from '../images/church.jpg'
import Slider from './slider'
import Sermon from './sermons'

export default class HomePage extends Component {
  render() {
    return (
      <div className="all-contents">
        <div className="container-fluid home-slider">
          <Slider />
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="card zoom">
                    <img className="card-img-top" src={Youth} alt="" />
                    <div className="card-body column-page">
                      <h5 className="card-title text-center header">Our Philosophy</h5>
                      <p className="card-text">We believe that Jesus Christ has the power to transform human life by giving hope, meaning and purpose in a sinful world.</p>
                      <Link to="#" className="btn btn-outline-primary card-button">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card zoom">
                    <img className="card-img-top" src={Slider3} alt="" />
                    <div className="card-body column-page">
                      <h5 className="card-title text-center header">Our Mission</h5>
                      <p className="card-text">To develop each other spiritually, socially and economically through faith in Jesus Christ our Lord.</p>
                      <Link to="#" className="btn btn-outline-primary card-button">Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card zoom">
                    <img className="card-img-top" src={Preach} alt="" />
                    <div className="card-body column-page">
                      <h5 className="card-title text-center header">Our Vision</h5>
                      <p className="card-text">We aspire to be a centre of God founded on Christian principles...Therefore go and make disciples of all nations...</p>
                      <Link to="#" className="btn btn-outline-primary card-button">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row main-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 zoom">
                <img src={Church} alt="" style={{ width: '700px', overflow: ' hidded', height: '450px' }} />
              </div>
              <div className="col-md-6 about">
                <h6>Welcome to PCEA MUKUYU CHURCH</h6>
                <p>
                  P.C.E.A Mukuyu was inaugurated and became a fully-fledged congregation with a full Local Church Committee, delinked from P.C.E.A Ruiru Town Church in 2014.

                <Link to="#" className="btn btn-outline-primary card-button" style={{color: 'white'}}>Read More</Link>
                </p>
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="fas fa-heart">Love</h5>
                    <hr />
                    <p>
                      We believe that we should love one another just like how God love us
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fab fa-fantasy-flight-games "> Faith</h5>
                    <hr />
                    <p>
                      We trust in God on everything. He is the giver of everything
                  </p>
                  </div>
                  <div className="col-md-4">
                    <h5 className="fab fa-angellist"> Hope </h5>
                    <hr />
                    We put our hope to Our God

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <h5 className="fas fa-user-graduate"> Commitment </h5>
                    <hr />
                    We are committed to spreading the gospel of christ all over the world
                  </div>
                  <div className="col-md-4">
                    <h5 className="fas fa-award"> Honesty </h5>
                    <hr />
                    He should be honest to ourselves and to God himself

                  </div>
                  <div className="col-md-4">
                    <h5 className="fas fa-address-book"> Loyalty </h5>
                    <hr />
                    We are loyal to one another. We are our brothers' keeper
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="container footer-wrapper">
          <Sermon />
        </div>
      </div>
    )
  }
}