import React, { useEffect, useState } from "react";
import "./navbar.css"
import logoSvg from "../animations/aloha.svg"

const Navbar = ()=> {
  const [width , setWidth ] = useState(window.innerWidth)

  return (
    <>
    <div className="navBar">
    <nav className="navbar insideNavBar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand brandTitle" href="#">
    <img src={logoSvg} alt="Logo" />
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: "300px"}}>
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <ul className="navbar-nav me-5 mb-2 mb-lg-0">
        <li key={"aa"} className="nav-item">
          <a className="nav-link navTitle" aria-current="page" href="#">Home</a>
        </li>
        <li key={"ab"} className="nav-item">
          <a className="nav-link navTitle" href="#">Surfing</a>
        </li>
        <li key={"ac"} className="nav-item">
          <a className="nav-link navTitle" aria-current="page" href="#">Hula</a>
        </li>
        <li key={"ad"} className="nav-item">
          <a className="nav-link navTitle" href="#">Vulcano</a>
        </li>
      </ul>
      <form className="d-flex ms-3" role="search">
        <button className="btn btn-sm btn-success" type="submit">Book a trip</button>
      </form>
  </div>
</div>
  </div>
</nav>
    </div>

    </>
  );
}

export default Navbar;
