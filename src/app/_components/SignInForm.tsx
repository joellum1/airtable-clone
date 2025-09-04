"use client";

import { signIn } from "next-auth/react";

export default function SignInForm() {
  const handleGoogleSignIn = async () => {
    try {
      // Initiate Google OAuth flow directly
      await signIn("google", {
        redirect: true,
        callbackUrl: "/", // Redirect back to homepage after sign-in
      });
    } catch (error) {
      console.error("Google Sign-In error:", error);
    }
  };

  return (
    <div className="w-[500px]">
      {/* Logo Section */}
      <div className="mt-[20px]">
        <img src="/images/airtablelogo.png" alt="airtable logo" className="w-[42px] h-[35px]"/>
      </div>

      {/* Sign-in Header */}
      <h1 className="mt-[48px] mb-[48px] text-black text-[32px] font-medium">
        Sign in to Airtable
      </h1>

      {/* Form Section */}
      <div className="flex flex-col gap-[20px]">
        {/* Email Form */}
        <form id="signInEmailForm" action="" className="block">
          <div className="w-[100%] mb-[24px]">
            <label htmlFor="emailLogin" className="font-[15px]">Email</label>
            <div className="mt-[5px]">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full pt-[4px] pr-[8px] pb-[4px] pl-[8px] border-solid border-1 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button 
            type="submit"
            className="flex items-center justify-center w-[100%] h-[40px] pt-[7px] pr-[14px] pb-[7px] pl-[14px] bg-[#91b0e6] text-white rounded-md"
          >
            Continue
          </button>
        </form>

        {/* Divider */}
        <span className="flex w-[100%] justify-center">or</span>

        {/* Google Sign-in */}
        <div>
          <button 
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full h-[40px] border-solid border border-gray-300 hover:bg-gray-50 rounded-md pl-[0.75rem] pr-[0.75rem] gap-[10px]"
          >
            <svg className="w-[16px] h-[16px]" viewBox="0 0 18 18">
              <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" fill="#4285F4"/>
              <path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" fill="#34A853"/>
              <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" fill="#FBBC05"/>
              <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" fill="#EA4335"/>
            </svg>
            <span>
              Continue with <span className="font-semibold">Google</span>
            </span>
            {/* <span className="flex items-center w-[100%] h-[100%] gap-[10px]">
              <div className="flex w-[16] h-[16] items-center justify-center">
                <svg className="w-[16px] h-[16px]" viewBox="0 0 18 18">
                  <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" fill="#4285F4"/>
                  <path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" fill="#34A853"/>
                  <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" fill="#FBBC05"/>
                  <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" fill="#EA4335"/>
                </svg>
              </div>
              <p className="">
                <span>Continue with </span> 
                <span className="font-semibold">Google</span>
              </p>
            </span> */}
          </button>
        </div>
      </div>
    </div>
  );
}