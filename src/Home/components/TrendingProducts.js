import React from 'react'

const TrendingProducts = () => {
  const trendingProduct = [
    {
      id: 1,
      img: './images/trending_product1.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 2,
      img: './images/trending_product2.jpg',
      productname: "Red Women Purses",
      price: "$40"
    },
    {
      id: 3,
      img: './images/trending_product3.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 3,
      img: './images/trending_product4.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 5,
      img: './images/trending_product5.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 6,
      img: './images/trending_product6.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 7,
      img: './images/trending_product7.jpg',
      productname: "Red Women Purses",
      price: "$35"
    },
    {
      id: 8,
      img: './images/trending_product8.jpg',
      productname: "Red Women Purses",
      price: "$35"
    }
  ]

  return (
    <div className="trending-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>TRENDING PRODUCTS</h1>
          </div>
        </div>
        <div className="row">
          {
            trendingProduct.map((item, index) => {
              return (
                <div className="col-md-3 text-center" key={index}>
                  <div className="featured-item">
                    <figure className="product-item">
                      <img src={item.img} className="img-fluid img-width" alt={item.productname} />
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

export default TrendingProducts
