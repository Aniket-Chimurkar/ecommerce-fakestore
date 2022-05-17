import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const state = useSelector((state)=>state.handleCart)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand  fs-10"  to="/">
          Fake Store <br/> Collection
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
         <div className="buttons">
          <NavLink to="/login" className="btn btn-outline-dark me-2">  <i className="fa fa-sign-in me-1" aria-hidden="true"></i>Login</NavLink>
          <NavLink to="/signup" className="btn btn-outline-dark me-2">  <i className="fa fa-user-plus " aria-hidden="true"></i>Sign-up</NavLink>
          <NavLink to="/cart" className="btn btn-outline-dark me-2">  <i className="fa fa-shopping-cart " aria-hidden="true"></i>Cart({state.length})</NavLink>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
