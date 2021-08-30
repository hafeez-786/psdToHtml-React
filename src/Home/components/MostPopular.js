import React from 'react';

const MostPopular = () => {
  const data = [
    {
      id: 1,
      img: './images/most_popular_product1.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 2,
      img: './images/most_popular_product2.jpg',
      productname: "Red Women Purses",
      price: "$40"
    },
    {
      id: 3,
      img: './images/most_popular_product3.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 4,
      img: './images/most_popular_product4.jpg',
      productname: "Red Women Purses",
      price: "$35"
    }
  ]
  return (
    <div className="most-popular-block">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>MOST POPULAR</h1>
          </div>
        </div>
        <div className="row">
          {
            data.map((item, index) => {
              return (
                <div className="col-md-3 text-center" key={index}>
                  <div className="featured-item">
                    <figure className="product-item">
                      <img src={item.img} className="img-fluid img-width" alt={item.productname} />
                      {/* <div className="links">
                        <a href=""><i className="fas fa-eye"></i></a>
                        <a href=""><i className="far fa-heart"></i></a>
                        <a href=""><i className="far fa-shopping-cart"></i></a>
                      </div> */}
                    </figure>
                    <div className="product-content">
                      <h5>{item.productname}</h5>
                      <div className="star">&#9734; &#9734; &#9734; &#9734; &#9734;</div>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MostPopular
