"use client"

import {useState,useEffect} from 'react'
import Navigation from '@/components/navigation/Navigation'
import { auth } from '@/components/firebase/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from 'next/navigation'



export default function Home({ params }) {
  // auth.settings.appVerificationDisabledForTesting = true;
  const router = useRouter()
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  console.log("q",params.q);
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        }
      });
    }
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
        alert("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
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


  // useEffect(() => {
  //   if (!auth.currentUser) {
  //     console.log(auth.currentUser);
  //     // history.push("/dashboard");
  //   }
  // }, [user]);


  return (
    <>
    <Navigation/>
     <input type='text' value={ph} onChange={(e)=>{setPh(e.target.value)}}/>
    <button id='sign-in-button' onClick={onSignup}>Signup</button>
    <input type='text' value={otp} onChange={(e)=>{setOtp(e.target.value)}}/>
    <button disabled={!showOTP} onClick={onOTPVerify}>Verify OTP</button>
    </>
  )
}
