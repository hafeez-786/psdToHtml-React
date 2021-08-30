import React from 'react';

const Navbar = () => {
  return (
    <div className="container">
      <div className="row pt-4 pb-4">
        <div className="col-md-2 col-4">
          <h2 className="logo-text">Silon<span style={{ color: "#ff5353", fontSize: "40px" }}>&#46;</span></h2>
        </div>
        <div className="col-md-7 col-3">
          <div className="menu-block">
            <ul className="menu-bar">
              <li className="nav-item"><a href="">HOME</a></li>
              <li className="nav-item"><a href="">ABOUT</a></li>
              <li className="nav-item"><a href="">SERVICES</a></li>
              <li className="nav-item"><a href="">PROJECTS</a></li>
              <li className="nav-item"><a href="">BLOG</a></li>
              <li className="nav-item"><a href="">CONTACT</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-5 text-end">
          <div className="cart-product">
            <div className="cart-length"><span>0</span></div>
            <div className="heart-count"><span>09</span></div>
            <span className="material-icons-outlined"><i className="fas fa-search"></i></span>
            <span className="material-icons-outlined"><i className="far fa-shopping-cart"></i></span>
            <span className="material-icons"><i className="far fa-heart"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
