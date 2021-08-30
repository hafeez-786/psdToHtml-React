import React from 'react'

const FollowUs = () => {
  const followData = [
    {
      id: 1,
      img: './images/follow1.jpg',
    },
    {
      id: 2,
      img: './images/follow2.jpg',
    },
    {
      id: 3,
      img: './images/follow3.jpg',
    },
    {
      id: 4,
      img: './images/follow4.jpg',
    },
  ]

  return (
    <div className="follow-us-block common-margin">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>FOLLOW US</h1>
          </div>
        </div>
        <div className="row mb-5">
          {
            followData.map((item, index) => {
              return (
                <div className="col-md-3 col-6 overlay-block mb-4" key={index}>
                  <a href="">
                    <img src={item.img} alt="follow" className="img-fluid" />
                    <i className="text fab fa-instagram"></i>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default FollowUs
