import React from 'react';
import google from "@/src/assets/images/google2.png";


interface TutorProps {
  name: string;
  lastname:string;
  imageUrl: string;

}
const SignUpForm: React.FC <TutorProps>= ({name, lastname, imageUrl}) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
        {/* Profile Image and Close Button */}
        <div className="flex items-center justify-between ">
          {/* Profile Image */}
          <div className="flex items-center space-x-4">
            <img
              src={imageUrl}
              alt="Profile"
              className="w-20 h-20 rounded-xl object-cover"
            />
          </div>

          {/* Close Button */}
          {/* <button className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close</span>
            ✕
          </button> */}
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-start mt-4">Sign Up to continue</h2>
        <p className="text-gray-500 text-left text-sm mb-4">
          Create an Educify account to book a lesson with <strong>{name} {lastname} </strong>
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
            required
          />

          {/* Phone Number */}
          <div className="flex space-x-2">
            <select
              className="w-1/4 px-2 py-2 border-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
              defaultValue="NIG"
            >
              <option value="NIG">NIG</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-3/4 px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
              required
            />
          </div>

          <div className="flex flex-row space-x-2">
            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
              required
            />

            {/* Confirm Password */}
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border-2 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-700"
              required
            />
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="flex flex-col space-y-8">
          {/* Google Login */}
          <button className="w-full flex items-center font-extrabold justify-center px-4 py-3 bg-black text-white rounded-full hover:bg-gray-800">
            <img
              src={google.src}
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>

          {/* Terms */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-indigo-500"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-yellow-500 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Proceed Button */}
          <button
            className="w-full mt-4 text-white px-4 py-3 bg-yellow-500 font-semibold rounded-full hover:bg-yellow-600 disabled:opacity-50"
            disabled
          >
            Proceed →
          </button>

          {/* Sign In */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{' '}
            <a href="/auth/signIn" className="text-yellow-500 font-bold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
