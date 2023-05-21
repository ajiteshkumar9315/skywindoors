import React from 'react'
import './partner.css'

const Partner = () => {
  return (
    <>
    <div className='par-body' >
      <div className="par-left">
      <h3 className='par-head'>OUR TRUSTED <br /> PARTNER</h3>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide par-right" data-bs-ride="carousel">
  <div className="carousel-inner1">
    <div className="carousel-item active">
      <img src="../img/simta.png" className="d-block w-90px h-20px par-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../img/innovate.png" className="d-block w-90px h-20px par-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../img/prominance.png" className="d-block w-90px h-20px par-img" alt="..."/>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Partner
