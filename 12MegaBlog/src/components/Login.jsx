import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import  authService from "../appwrite/Auth";
import {Logo, Button, Input} from '../components/index'
import { useForm } from 'react-hook-form';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    setError(""); //This line clears any previous error messages
    try {
      const session = await authService.Login(data);
    //Calls the Login method from the authService object, passing the data
    //It is used to authenticate a user based on the provided data, which typically includes the user's credentials (such as email and password).
      if (session) {
        const userData = await authService.getCurrentUser();
    //getCurrentUser is used to fetch information about the currently authenticated user.
        if (userData) dispatch(authLogin(userData));
    //Dispatches the authLogin action with the user data. This action likely updates the Redux store with the authenticated user information.
        navigate("/");
    //Navigates to the home page (or any desired location) using the navigate function from react-router-dom.
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-center text-red-500 mt-8">{error}</p>} 
        {/* this error is make to show the error in the page if occurs */}

        <form onSubmit={handleSubmit(login)}>  {/*{handleSubmit(login)}is the method of form*/}
              <div className="space-y-5">
                <Input 
                label = 'Email :'
                placeholder = 'Enter your email'
                type = 'email'
                {...register('email' , { 
                  required : true,
                  validate : {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                  }
                })}
                />
        {/* {...register('email' , { is the officialy form pattern 'email is the refernce name' */}
                <Input 
                label= 'Password:'
                type = 'password'
                placeholder = 'Enter your password'
                {...register ('password' , {
                  required : true,
                })}
                />

                <Button className="w-full"
                type="submit"
                >
                  Sign in </Button>           
                </div> 
        </form>
        </div>
        </div>
  )

}

export default Login;
