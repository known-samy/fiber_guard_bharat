/* eslint-disable react/no-unescaped-entities */
"use client"

import {useState,useEffect} from 'react'
import Navigation from '@/components/navigation/Navigation'
import { auth } from '@/components/firebase/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from 'next/navigation'
import OtpInput from 'react-otp-input';



export default function Home({ params }) {
  // auth.settings.appVerificationDisabledForTesting = true;
  const router = useRouter()
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  
  function onEdit(){
    setShowOTP(false);
    setOtp("");
  }

  function onCaptchVerify() {

      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
        'size': 'invisible',
      });

  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91"+ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        console.log("OTP sended successfully!");
      })
      .catch((error) => {
          grecaptcha.reset(0);
 
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        // console.log(res);
        setUser(res.user);
        setLoading(false);
        if(params.q){
          router.push(`/${params.q[0]}`, undefined, { shallow: true })
        }
        else{
          router.push('/', undefined, { shallow: true })
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }



  return (
    <>
    <div id='sign-in-button' style={{position:'absolute',top:'-200%',display:'none'}}></div>
    <div className="flex flex-col justify-center items-center w-full">
      
      <div className="flex flex-col justify-start items-start bg-[#EBE3E0] w-fit rounded-lg p-8 " style={{marginTop:"calc(100vh - (100vh - 100px))"}}>
        <div className="text-3xl font-bold text-center w-full mb-6 ">Login</div>
        <div className="text-base font-bold mb-6 w-full">
          {
          showOTP?
            <div className='bg-orange-100 p-1 rounded-full px-3 text-center m-auto'>
              {`Check +91 ${ph} for OTP`}
            </div>
            :
            "Enter your phone number"
          }
        </div>
        {showOTP && (
          <div className="flex flex-row justify-center items-center -mt-5 mb-6 w-full">
            <div className="text-sm font-semibold">Wrong number?</div>
            <div className="text-sm font-semibold text-[#E1946F] ml-1 cursor-pointer" onClick={onEdit}>Edit</div>
          </div>
        )}

        {
          showOTP?
          <OtpInput
          value={otp}
          containerStyle={"flex flex-row justify-center gap-x-2"}
          inputStyle={{width: "40px",color:"#E1946F", height: "40px", border: "2px solid #E1946F", borderRadius: "8px", background:"white"}}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span></span>}
          renderInput={(props) => <input {...props} />}
        />
          :
          <input type='text' className='p-2 rounded-md border-[#E1946F] border-2 w-72 tracking-widest focus:outline-[#7a4e3a]' value={ph} onChange={(e)=>{setPh(e.target.value)}}/>
        }
            <button type="button"  onClick={showOTP?onOTPVerify:onSignup} className="flex items-center justify-center p-2 mt-6 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#E1946F] hover:bg-[#eea98a] transition ease-in-out duration-150 w-full" disabled={loading}>
            {
              loading ? 
                (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )
            :
            (showOTP?"Verify OTP":"Submit")
            }
          </button>
        {/* <FormButton title={showOTP?"Verify OTP":"Submit"} onSignup={showOTP?onOTPVerify:onSignup} loading={loading}/> */}
        {showOTP && (
          <div className="flex flex-row justify-center items-center mt-4 w-full">
            <div className="text-sm font-semibold">Didn't receive OTP?</div>
            <div className="text-sm font-semibold text-[#E1946F] ml-1 cursor-pointer">Resend</div>
          </div>
        )}
      </div>


    </div>


    </>
  )
}


import React from 'react'

export const OTP = () => {
  return (
    <div>
          <OtpInput
      value={otp}
      containerStyle={"flex flex-row justify-center gap-x-2"}
      inputStyle={{width: "40px",color:"#E1946F", height: "40px", border: "2px solid #E1946F", borderRadius: "8px",background:"white"}}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
    />
    </div>
  )
}


const FormButton = ({...props }) => {
  return (
    <button type="button" id='sign-in-button'  onClick={props.onSignup} className="flex items-center justify-center p-2 mt-6 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#E1946F] hover:bg-[#eea98a] transition ease-in-out duration-150 w-full" disabled={props.loading}>
    {
    props.loading ? 
      (
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )
  :
  props.title
  }
  </button>
  )
}