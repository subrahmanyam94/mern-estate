import React from 'react'
import { GoogleAuthProvider, signInWithPopup,getAuth } from "firebase/auth";
import {app} from '../firebase.js'
import { useDispatch } from 'react-redux';
import { SignInSuccess } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';
export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async  () => {       
        try {
           const provider = new GoogleAuthProvider();
           const auth  = getAuth(app)

           const result = await signInWithPopup(auth, provider);
           const res = await fetch("/api/auth/google", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                photo: result.user.photoURL,
                email: result.user.email,
                name: result.user.displayName
            }),   
        });
      const data = await res.json(); 
      dispatch(SignInSuccess(data));
      navigate('/');
    }
     catch (error) {
            console.error("Google Sign-In error:", error);
        }
    }





  return (
      <button onClick={handleGoogleClick} type ="button" className='bg-red-700  text-white p-3 
      rounded-lg  uppercase hover:opacity-95'>Continue with google</button>
  )
}
