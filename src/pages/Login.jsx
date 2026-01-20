import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center mt-32 rounded-xl items-center flex-col">
      <div className="card bg-base-100 shrink-0 shadow p-16">
        <h2 className="font-semibold text-3xl mx-auto text-[403F3F]">
          Login your account
        </h2>
        <hr className="my-12 text-base-300" />
        <fieldset className="fieldset">
          <label className="label text-xl font-semibold ">Email address</label>
          <input
            type="email"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Email"
          />
          <label className="label text-xl font-semibold  ">Password</label>
          <input
            type="password"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover text-sm hover:text-[#FF8C47] px-6">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-xl bg-[#403F3F] mt-4 font-semibold text-xl text-white">
            Login
          </button>
          <p className="text-base mt-7 mx-auto">
            Dont’t Have An Account?
            <Link to="/auth/register" className="text-[#FF8C47]">
              {" "}
              Register
            </Link>
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
