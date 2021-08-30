import React from 'react'

const Topbar = () => {
  return (
    <div className="top-bar pt-3 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 top-left">
            <span><strong>PHONE:</strong> +01 256 25 235</span>
            <span><strong>EMAIL: </strong> INFO@SILICON.COM</span>
          </div>
          <div className="col-md-6 col-12 top-right text-end">
            <span>GIFT CARD</span>
            <span>TRACK ORDER</span>
            <span>LANGUAGE</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
