import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = use(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center mt-32 rounded-xl items-center flex-col">
      <form
        onSubmit={handleLogIn}
        className="card bg-base-100 shrink-0 shadow p-16"
      >
        <h2 className="font-semibold text-3xl mx-auto text-[403F3F]">
          Login your account
        </h2>
        <hr className="my-12 text-base-300" />
        <fieldset className="fieldset">
          <label className="label text-xl font-semibold ">Email address</label>
          <input
            type="email"
            name="email"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Email"
            required
          />
          <label className="label text-xl font-semibold  ">Password</label>
          <input
            type="password"
            name="password"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Password"
            required
          />
          <div>
            <a className="link link-hover text-sm hover:text-[#FF8C47] px-6">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="btn btn-xl bg-[#403F3F] mt-4 font-semibold text-xl text-white"
          >
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
      </form>
    </div>
  );
};

export default Login;
