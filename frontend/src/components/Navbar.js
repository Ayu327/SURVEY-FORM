import React from "react";
// import SideBar from "./SideBar";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    // <div className="navbar">
    //   {user && (
    //     <div>
    //       <h1>LOGO</h1>
    //       <span>{user.email}</span>
    //       <button onClick={handleClick}>Logout</button>
    //     </div>
    //   )}
    // </div>
    <nav className="navbar bg-body-tertiary">
      {user && (
        <div className="container-fluid">
          <a className="navbar-brand">Survey Form</a>
          <form className="d-flex" role="search">
            <span className="email">{user.email}</span>
            <button className="btn btn-dark" onClick={handleClick}>
              logout
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
