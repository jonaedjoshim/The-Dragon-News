import React from 'react';
import userImg from "../assets/user.png"
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className=' my-8 flex items-center border justify-between'>
        <div></div>
        <div className='flex gap-4 justify-center'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
        </div>
        <div className='flex gap-4'>
            <img src={userImg}alt="" />
            <button className='btn btn-primary px-8'>Sign In</button>
        </div>
    </div>
  );
};

export default Navbar;