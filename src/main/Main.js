import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Church from '../images/church.jpg'
import Slider3 from '../images/slider3.jpg'
import Preach from '../images/preach.jpg'
import Slider from './slider'

export default class HomePage extends Component {
  render() {
    return (
      <Fragment>
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
                    <img className="card-img-top" src={Church} alt="" />
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
            <div className="row">
              <p style={{ textAlign: 'justify' }}>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies velit id turpis euismod, eget faucibus urna rutrum. Maecenas quis tellus id erat ornare accumsan vel eu orci. Curabitur feugiat est mauris, sodales sagittis massa tincidunt eget. Ut et ornare mi, id vehicula orci. Mauris tellus sapien, tristique ac semper sed, mollis eget nisl. Donec nec mollis nisl. Maecenas dictum varius justo vel vestibulum. Ut mattis nisi odio. Ut sagittis aliquam leo a rhoncus.

       Vivamus porttitor lacus nec nisl vestibulum, maximus gravida lorem euismod. Suspendisse gravida, eros in tempor fringilla, risus nisi scelerisque arcu, eu auctor quam odio quis metus. Praesent gravida lorem aliquet nulla ullamcorper, a consectetur odio vulputate. Proin rutrum lorem ut est rhoncus pulvinar. Etiam sit amet aliquam lorem, at consequat enim. Duis elementum commodo hendrerit. Cras sit amet nibh ultricies, varius ligula id, malesuada risus. Sed justo erat, malesuada eget est eu, sodales ornare enim. Cras quis nisi mattis, convallis mauris et, porttitor magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent in arcu lobortis, tincidunt augue sit amet, aliquet erat. Etiam aliquam est quis vulputate volutpat. In vulputate nisl sed dignissim imperdiet. Nulla facilisi. Nam ac odio eu leo consequat elementum. Quisque lacinia erat dictum facilisis convallis.

</p>
            </div>
            {/* <div className="col-md-4">
            <h5>What We Believe</h5>
            <div className="card">
              <div className="card-body">
                <h5 className="">Vision Statement</h5>
                <p>To be a centre of God founded on Christian principles...Therefore go and make disciples of all nations.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="">Our Mission</h5>
                <p>Our mission is to develop each other spiritually, socially and economically through faith in jesu Christ our Lord.</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="">Our Core Values</h5>
                <p>Commitment, Compassion, Competence, Innovation, Team Work, Transparency, Faith, Stewardship, Hope,Integrity, Service, Peace, Humanity & Accountability</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
        <div style={{ marginBottom: '2em' }}></div>
        <br />

      </Fragment>
    )
  }
}