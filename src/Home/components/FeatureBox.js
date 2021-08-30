import React from 'react';

const FeatureBox = () => {
  const featureData = [
    {
      id: 1,
      img: './images/money_back.png',
      name: "MONEY BACK GURANTEE",
      discription: "Great fill signs he evening"
    },
    {
      id: 2,
      img: './images/free_delivery.png',
      name: "FREE DELIVERY",
      discription: "Great fill signs he evening"
    },
    {
      id: 3,
      img: './images/always_support.png',
      name: "ALWAYS SUPPORT",
      discription: "Great fill signs he evening"
    },
    {
      id: 4,
      img: './images/secure_paymnt.png',
      name: "SECURE PAYMENT",
      discription: "Great fill signs he evening"
    }
  ]

  return (
    <div className="container common-margin">
      <div className="row">
        {
          featureData.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 text-center" key={index}>
                <div className="feature-box">
                  <img src={item.img}  alt="feature" className="img-fluid"/>
                  <h5>{item.name}</h5>
                  <p>{item.discription}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FeatureBox
