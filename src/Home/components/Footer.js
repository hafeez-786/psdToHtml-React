import React from 'react';


const Footer = () => {
  const footerLink = [
    {
      id: 1,
      name: "ABOUT US",
      link1: "Who we are",
      link2: "Work with us",
      link3: "Become a supplier",
      link4: "Investor relation",
      link5: "Our devices",
      link6: "Affiliate program",
    },
    {
      id: 2,
      name: "USEFUL LINKS",
      link1: "Who we are",
      link2: "Work with us",
      link3: "Become a supplier",
      link4: "Investor relation",
      link5: "Our devices",
      link6: "Affiliate program",
    },
    {
      id: 3,
      name: "ONLINE SHOPPING",
      link1: "Who we are",
      link2: "Work with us",
      link3: "Become a supplier",
      link4: "Investor relation",
      link5: "Our devices",
      link6: "Affiliate program",
    }
  ]
  return (
    <div className="section footer-block">
      <div className="container">
        <div className="row">
          {
            footerLink.map((list, index) => {
              return (
                <div className="col-md-3 col-6 footer-list pl-0" key={index}>
                  <ul className="useful-links">
                    <h5>{list.name}</h5>
                    <li><a href="#">{list.link1}</a></li>
                    <li><a href="#">{list.link2}</a></li>
                    <li><a href="#">{list.link3}</a></li>
                    <li><a href="#">{list.link4}</a></li>
                    <li><a href="#">{list.link5}</a></li>
                    <li><a href="#">{list.link6}</a></li>
                  </ul>
                </div>
              )
            })
          }
          <div className="col-md-3 col-6 experiance-app">
            <h5>EXPERIANCE APP ON MOBILE</h5>
            <button className="btn left">
              <i className="fas fa-robot"></i>
              GET IT ON <br />
              <strong>GOOGLE PLAY</strong>
            </button>
            <button className="btn right">
              <i className="fab fa-apple"></i>
              GET IT ON <br />
              <strong style={{ color: "white" }}>APP STORE</strong>
            </button>
            <hr />
            <div className="social-icons">
              <h5 className="online-shopping mb-4">ONLINE SHOPPING</h5>
              <a href=""><i className="fab fa-facebook-f"></i></a>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-pinterest-p"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col copyright-text">
            <hr />
            <p className="footer-copyright-text text-center">
              copyright &#169; 2021
              <span> hafeez.com. </span>
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
