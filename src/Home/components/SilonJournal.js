import React from 'react';

const SilonJournal = () => {
  const silonData = [
    {
      id: 1,
      img: './images/silon_journal1.jpg',
      discription: "Were divided land his creature which have evening subdue"
    },
    {
      id: 2,
      img: './images/silon_journal2.jpg',
      discription: "Were divided land his creature which have evening subdue"
    },
    {
      id: 3,
      img: './images/silon_journal3.jpg',
      discription: "Were divided land his creature which have evening subdue"
    },
  ]

  return (
    <div className="silon-journal-block">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>SILON JOURNAL</h1>
          </div>
        </div>
        <div className="row">
          {
            silonData.map((item, index) => {
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <img src={item.img} alt="feature" className="img-fluid mb-4" />
                  <p className="date"><span>-</span> <span>07 July, 2019</span></p>
                  <h5>{item.discription}</h5>
                  <hr />
                  <p className="silon-comments">
                    <span><i className="fas fa-gift"></i> Women Fashion</span>
                    <span><i className="fal fa-comment-alt-smile"></i> 2 comments</span>
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SilonJournal
