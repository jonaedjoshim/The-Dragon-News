import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    const [nameError, setnameError] = useState("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 3) {
      setnameError("Name must be at least 3 characters long");
      return;
    } else {
      setnameError("");
    }
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.messege;
        alert(errorMessage);
      });
    console.log({ name, photoUrl, email, password });
  };

  return (
    <div className="flex justify-center mt-5 rounded-xl items-center flex-col">
      <form
        onSubmit={handleRegister}
        className="card bg-base-100 shrink-0 shadow p-16"
      >
        <h2 className="font-semibold text-3xl mx-auto text-[403F3F]">
          Register your account
        </h2>
        <hr className="my-12 text-base-300" />
        <fieldset className="fieldset">
          <label className="label text-xl font-semibold ">Your Name</label>
          <input
            type="text"
            name="name"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Enter your name"
            required
          />
          {nameError && <p className="text-red-600 text-xs">{nameError}</p>}
          <label className="label text-xl font-semibold ">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Share your photo url"
          />
          <label className="label text-xl font-semibold ">Email</label>
          <input
            type="email"
            name="email"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Enter your email address"
            required
          />
          <label className="label text-xl font-semibold ">Password</label>
          <input
            type="password"
            name="password"
            className="input mb-6 w-md p-5 text-base"
            placeholder="Password"
            required
          />
          <div>
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept Term & Conditions
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-xl bg-[#403F3F] mt-4 font-semibold text-xl text-white"
          >
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
      </form>
    </div>
  );
};

export default Register;
