import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
     <nav className="navbar navBarTwo navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Amazon</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gift Sale</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Customer Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sell</a>
        </li> */}
        <div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
       
      </ul>
      <form className="d-flex">
        <button className="btn btn-light me-2" type="submit">          
          <FaShoppingCart />
        </button>
        <Link to="/register" className="btn btn-light" type="submit">
              <FaUserAlt />
        </Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header