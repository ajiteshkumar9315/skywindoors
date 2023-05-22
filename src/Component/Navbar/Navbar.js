import React from 'react'
import './Navbar.css'

 const Navbar = () => {
  return (
    <>
    <img src="../img2/above-nav.png" alt="" width='100%' className='nav-img1' />
    <nav className="navbar navbar-expand-lg bg-body-tertiary  fs-4 fw-medium ">
  <div className="container-fluid ">
    <img src="../img2/logo.jpg" alt="" className='ms-5 nav-img2' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end p-3" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item p-2">
          <a className="nav-link active" aria-current="page" href="./Home">Home</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="./About">About Us</a>
        </li>
        <li className="nav-item dropdown p-2">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">System Aluminium</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
            </li>
            <li><a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">UPVC</a></li>
          </ul>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="./Blog">Blog</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="./Contact">Contact Us</a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#">+91 87439 92266</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 

    </>
  )
}

export default Navbar