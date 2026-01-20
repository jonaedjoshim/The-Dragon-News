import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center mt-5 rounded-xl items-center flex-col">
      <div className="card bg-base-100 shrink-0 shadow p-16">
        <h2 className="font-semibold text-3xl mx-auto text-[403F3F]">
          Register your account
        </h2>
        <hr className="my-12 text-base-300" />
        <fieldset className="fieldset">
          <label className="label text-xl font-semibold ">Your Name</label>
          <input
            type="text"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Enter your name"
          />
          <label className="label text-xl font-semibold ">Photo URL</label>
          <input
            type="text"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Share your photo url"
          />
          <label className="label text-xl font-semibold ">Email</label>
          <input
            type="email"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Enter your email address"
          />
          <label className="label text-xl font-semibold ">Password</label>
          <input
            type="password"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Password"
          />
          <div>
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Term & Conditions
            </label>
          </div>
          <button className="btn btn-xl bg-[#403F3F] mt-4 font-semibold text-xl text-white">
            Register
          </button>
          <p className="text-base mt-7 mx-auto">
            Already Have An Account?
            <Link to="/auth/login" className="text-[#FF8C47]">
              {" "}
              Login
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
