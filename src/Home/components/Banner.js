import React from 'react';
import GirlBanner from '../components/images/banner.png';

const Banner = () => {
  return (
    <div className="banner-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-1 order-md-0 pt-5 left-content text-center">
            <p>ULTIMATE COLLECTION</p>
            <h2>Complete Women <br /> Fashion Here</h2>
            <button className="btn btn-common">SHOP NOW</button>
          </div>
          <div className="col-md-6 order-0 order-md-1">
            <img src={GirlBanner} alt="banner" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
