"use client";

import React, { useEffect, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Logo from "@/src/assets/images/EducifyLogo.png";
import google from "@/src/assets/images/google.png";
import Link from 'next/link';


const LoginPage: React.FC = () => {
    const [hideGoogle, setHideGoogle] = useState(false)
    const [hideOpenMail, sethideOpenMail] = useState(true)
    const [hideBookafreetrial, setHideBookafreetrial] = useState(false)
    const [hideEmailInput, setHideEmailInput] = useState(false)
    const [hideSendmeaLink, setHideSendmeaLink] = useState(false)
    const [hideSigninwithPassword, setHideSigninwithPassword ] = useState(false)
    const [hidePasswordInput, setHidePasswordInput] = useState(true)
    const [hideSigninButton, setHideSigninButton] = useState(true)
    const [hideChangePassword, setHideChangePassword] = useState(true)
    const [welcomeText, setWelcomeText ] = useState("Welcome to Educify!")
    const [acknowledgementText, setAcknowledgementText ] = useState("Educify helps you learn, optimize and support your academic journey.")
    const [isVisible, setIsVisible] = useState(false); // Visibility state
    const [isVisibleVerificcation, setIsVisibleVerificcation] = useState(false); // Visibility state
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [timer, setTimer] = useState(56); 

   useEffect(() => {
      if (timer > 0) {
        const countdown = setInterval(() => setTimer(timer - 1), 1000);
        return () => clearInterval(countdown);
      }
    }, [timer]);

    const handleSendLink =()=>{
        setWelcomeText("Email Sent")
        setAcknowledgementText("Please input the verification code sent to your email and SMS.")
        setHideEmailInput(true)
        setHideGoogle(true)
        setHideSendmeaLink(true)
        setHideSigninwithPassword(true)
        setHideBookafreetrial(true)
        sethideOpenMail(false)
    }

    const handleEmailLogin =()=>{
        setHideEmailInput(true)
        setHideGoogle(false)
        setHideSendmeaLink(true)
        setHideSigninwithPassword(true)
        setHideBookafreetrial(false)
        sethideOpenMail(true)
        setHideSigninButton(false)
        setHidePasswordInput(false)
    }

    const handleChangePassword =()=>{
        setWelcomeText("Reset Password")
        setHideEmailInput(true)
        setHideGoogle(true)
        setHideSendmeaLink(true)
        setHideSigninwithPassword(true)
        setHideBookafreetrial(true)
        sethideOpenMail(true)
        setHideSigninButton(true)
        setHidePasswordInput(true)
        setHideChangePassword(false)
        setIsVisible(!isVisible); // Toggle visibility
    }
    const handleResetPassword =()=>{
        setWelcomeText("Email Verification")
        setAcknowledgementText("Please input the verification code sent to your E-mail address and SMS ")
        setHideEmailInput(true)
        setHideGoogle(true)
        setHideSendmeaLink(true)
        setHideSigninwithPassword(true)
        setHideBookafreetrial(true)
        sethideOpenMail(true)
        setHideSigninButton(true)
        setHidePasswordInput(true)
        setHideChangePassword(false)
        setIsVisible(!isVisible); // Toggle visibility
        setIsVisibleVerificcation(!isVisibleVerificcation)
    }

  return (
    <div className="relative flex items-center justify-center min-h-screen  bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 hidden lg:block">
        <div
          className="absolute -top-40 left-0 w-full h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 100% 50%, 0 90%)",
          }}
        ></div>
      </div>
      <div className="relative w-full max-sm:mx-2 max-sm:my-2 max-w-lg p-8 bg-white rounded-3xl shadow-lg">
        <div className="flex flex-col items-center">
            <Link href="/">
            <img
            src={Logo.src}
            alt="Educify Logo"
            className="w-52 h-24"
          />
            </Link>    
          <h1 className="text-3xl font-bold text-center mt-4">{welcomeText}</h1>
          <p className="text-gray-500 text-center mt-2">
            {acknowledgementText}
          </p>
        </div>
        <form className="mt-6 space-y-2">
          <input
            hidden={hideEmailInput}
            type="email"
            placeholder="Your Email Address"
            className="w-full px-5 py-3 border border-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          {!hidePasswordInput && (
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-5 py-3 border border-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
              <span
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute top-4 right-4 cursor-pointer text-gray-500"
              >
                {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>
          )}
        <div className='flex flex-row-reverse'>
        <a onClick={handleChangePassword} hidden={hidePasswordInput} className="text-blue-500 hover:underline hover:cursor-pointer">
            forgot password?
          </a>
        </div>
      {isVisible && (
        <div className="flex flex-col">
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-5 py-3 border border-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500"
            >
              {passwordVisible ?<AiOutlineEye />  : <AiOutlineEyeInvisible />}
            </span>
          </div>

          <div className="relative mt-4">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full px-5 py-3 border border-gray-500 bg-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <span
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute top-4 right-4 cursor-pointer text-gray-500"
            >
              {confirmPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>

          <button
            onClick={handleResetPassword}
            type="button"
            className="w-full py-3 mt-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          >
            Reset Password
          </button>
          <div className="text-center text-gray-500 mt-6">
            Remember your password?{' '}
            <button onClick={handleEmailLogin} className="text-blue-500 hover:underline">
              Log in
            </button>
          </div>
        </div>
      )}
          <button
            onClick={handleSendLink}
            hidden={hideSendmeaLink}
            type="button"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
          >
            Send me a sign in link
          </button>
          <button
            onClick={handleEmailLogin}
             hidden={hideSigninwithPassword}
            type="button"
            className="w-full py-3 border border-gray-300 text-black font-semibold rounded-lg hover:bg-gray-100"
          >
            Sign in with password
          </button>
        </form>
        <div className="flex flex-col items-center my-6">
          <button
              onClick={handleSendLink}
              hidden={hideOpenMail}
              type="button"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
            >
              Open Email
            </button>
            <button
              onClick={handleSendLink}
              hidden={hideSigninButton}
              type="button"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800"
            >
              Sign In
            </button>
        </div>
      {/* Verification form controlled by visibility */}
      {isVisibleVerificcation && (
        <div className="w-full max-w-md px-16 max-sm:px-2 bg-white rounded-3xl ">
          <div className=" flex justify-between">
            {Array.from({ length: 5 }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-center text-lg font-medium border rounded-md border-gray-500 bg-gray-200 focus:outline-none focus:ring focus:ring-blue-300"
              />
            ))}
          </div>
          <button
            type="button"
            className="mt-6 w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Verify
          </button>
          <div className="mt-4 text-center text-sm text-gray-600">
            Didn’t receive an OTP?{" "}
            {timer > 0 ? (
              <span className="text-black">Resend code in {timer}s</span>
            ) : (
              <button
                type="button"
                className="text-blue-500 hover:underline focus:outline-none"
                onClick={() => setTimer(56)}
              >
                Resend code
              </button>
            )}
          </div>
        </div>
      )}
        <div hidden={hideBookafreetrial} className="text-center text-gray-500 mt-6">
         <div className='flex flex-row justify-center max-sm:flex-col'>
          <p className='pr-2'>
          Don’t have an account yet?{' '}
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Book a free Trial
          </a>
         </div>
         <div className='flex flex-row my-5'>
            <hr className="flex-grow border-t mt-5 border-gray-300 justify-center items-center" />
            <span hidden={hideGoogle} className="mx-4 text-gray-500 justify-center items-center">Or</span>
            <hr className="flex-grow border-t mt-5 border-gray-300 justify-center items-center" />
         </div>
        <div hidden={hideGoogle}></div>
            <button
                hidden={hideGoogle}
                type="button"
                className="w-full py-3 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                <img
                    src={google.src}
                    alt="Google"
                    className="w-6 h-6 mr-3"
                />
                Continue with Google
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
