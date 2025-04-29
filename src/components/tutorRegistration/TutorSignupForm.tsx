"use client";

import Image from "next/image";
import React, { useState } from "react";
import Google from "@/src/assets/images/google2.png";
import signUpImage from "@/src/assets/images/tutorSignupImage.png"
import EmailVerificationModal from "./EmailVerificationModal";



const TutorSignupForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const router = useRouter();


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    autosave: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Simulate form validation success
    console.log("Form Submitted:", formData);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCodeProceed = (code: string) => {
    console.log("Verification Code Entered:", code);
    setIsModalOpen(false);
    alert("Email verified successfully! ");
    setTimeout(() => {
      window.location.href = '/profileUpdate'; // Use window.location.href for navigation
    }, 500);
  };

  return (
    <>
       <div className="w-full lg:h-screen flex lg:flex-row max-md:flex-col max-md:h-full max-md:w-full max-md:px-3">
      <div className="lg:w-1/2 lg:flex lg:justify-center items-center lg:pl-16 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center max-w-md md:max-w-xl mx-auto px-4 py-8 md:px-6 md:py-8 font-sans"
      >
      <div className="flex justify-between w-full mb-5">
        <span>Autosave progress</span>
        <label className="relative inline-block w-10 h-5">
          <input
            type="checkbox"
            name="autosave"
            checked={formData.autosave}
            onChange={handleChange}
            className="opacity-0 w-0 h-0 peer"
          />
          <span className="absolute cursor-pointer inset-0 bg-gray-500 rounded-full transition peer-checked:bg-green-500"></span>
          <span className="absolute h-4 w-4 bg-white rounded-full left-[2px] bottom-[2px] transition peer-checked:left-[22px]"></span>
        </label>
      </div>

      <h2 className="mb-5 text-2xl font-semibold">Create an account</h2>

      <p className="mb-2 text-gray-500">Sign up with</p>

      <button
        type="button"
        className="bg-[#1A1A1A] text-white w-full py-3 px-5 rounded-full flex items-center justify-center mb-5"
      >
        <Image
          alt="Google logo"
          src={Google}
          width={20}
          height={20}
          className="mr-2"
        />
        Google
      </button>

      <div className="flex items-center w-full mb-5">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-3 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex flex-col md:flex-row gap-3 w-full mb-4">
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          className="flex-1 p-3 border border-gray-500 rounded"
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          className="flex-1 p-3 border border-gray-500 rounded"
        />
      </div>

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        placeholder="Email Address"
        className="p-3 border border-gray-500 rounded w-full mb-4"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        type="tel"
        placeholder="Phone number"
        className="p-3 border border-gray-500 rounded w-full mb-4"
      />

      <div className="flex flex-col md:flex-row gap-3 w-full mb-4">
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          className="flex-1 p-3 border border-gray-500 rounded"
        />
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="Confirm password"
          className="flex-1 p-3 border border-gray-500 rounded"
        />
      </div>

      <div className="flex items-center w-full mb-5">
        <input
          name="termsAccepted"
          type="checkbox"
          checked={formData.termsAccepted}
          onChange={handleChange}
          id="terms"
          className="mr-2"
        />
        <label htmlFor="terms" className="text-gray-500">
          I agree to the{' '}
          <a href="#" className="text-yellow-500 hover:underline">
            Terms & Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="bg-yellow-500 text-white py-3 px-5 rounded-full w-full font-semibold text-lg"
      >
        Sign up as a Tutor
      </button>

      <p className="mt-4 text-gray-500">
        Already have an account?{' '}
        <a href="#" className="text-yellow-500 hover:underline">
          Sign In
        </a>
      </p>
      </form>
        </div>
        <div className="lg:w-1/2 relative max-md:hidden">
        <Image alt="" src={signUpImage} fill className="object-cover" />
        </div>
      </div>

      <EmailVerificationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onProceed={handleCodeProceed}
      />
    </>
 
    
  );
};

export default TutorSignupForm;
