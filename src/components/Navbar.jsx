import React, { use } from "react";
import userImg from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("lets log out");
    logOut().then(() => {
      alert("Logged out");
    }).cathch((error=>{
      alert("An error happened.")
    }))
  };

  return (
    <div className=" my-8 flex items-center justify-between">
      <div>{user && user.email}</div>
      <div className="flex gap-4 justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-4">
        <img src={userImg} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
