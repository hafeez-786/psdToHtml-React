import React from 'react';
import OffWomen from '../components/images/offer_women.png';

const Offer = () => {
  return (
    <section className="offer-block common-margin">
      <div className="container">
        <div className="row">
          <div className="col-md-6 left-Block order-1 order-md-0 ">
            <div className="content text-center">
              <h2>50% OFF</h2>
              <p>ALL WOMEN'S COLLECTION</p>
              <button className="btn btn-common">SHOP NOW</button>
            </div>
          </div>
          <div className="col-md-6 right-Block order-0 order-md-1">
            <img src={OffWomen} className="img-fluid" alt="offer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
