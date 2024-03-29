import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
 const { user, logOut } = useContext(AuthContext);
const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

    const navLink =  <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      <li><NavLink to="/order">Order_service</NavLink></li>
      <li>
      <Link to="/dashboard/cart">
        <button className="btn">
          Order
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </Link>
    </li>
      {
      user ? <>
      <span className=" mr-10 text-xl text-black">{user?.displayName}</span>
        <button onClick={handleLogOut} className="btn btn-warning">LOGOUT</button>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }
    </>
    return (
        <div className="navbar z-10 bg-opacity-30 max-w-screen-xl bg-black fixed text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
            {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-green-400">Cleaning Seivice</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        <div className="navbar-end">
           
         
        </div>
      </div>
    );
};

export default NavBar;