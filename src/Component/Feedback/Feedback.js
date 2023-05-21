import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <>
    <div className='fee-body'>
      <h2 className='fee-head'>WHAT CLIENTS SAY ABOUT US</h2>
      <p className='fee-p'>See What Our Customer Has To Say About Us!</p> 
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../img/f1.png" className="fee-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../img/f2.png" className="fee-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../img/f3.png" className="fee-img" alt="..."/>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Feedback
