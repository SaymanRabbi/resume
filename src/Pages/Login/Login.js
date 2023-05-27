import React, { useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import {useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import LoginEmail from './LoginEmail';
import { useState } from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import axios from 'axios';

const Login = () => {
    const [show, setShow] = useState(1);
    const [signInWithGoogle,googleuser] = useSignInWithGoogle(auth)
    const [signInWithFacebook, facebookuser] = useSignInWithFacebook(auth);
    const [code,setCode] = useState('')
    const naviagate = useNavigate();
    // =====sign in with google=====
const signInWithGooglefunc =async () => {
    try {
         signInWithGoogle()
           
       
     } catch (error) {
        
     }
}
const signInWithFacebookfunc =async () => {
    try {
         signInWithFacebook()
         if(facebookuser){
            naviagate('/resume-templates')
        }
     } catch (error) {
        
     }
}
    const { linkedInLogin } = useLinkedIn({
        clientId: '86kqhd6z3ywucx',
        redirectUri: `http://localhost:3000/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
        scope: 'r_liteprofile r_emailaddress',
        onSuccess: async(code) => {
         await axios.post('http://localhost:5000/api/v1/token/https://www.linkedin.com/oauth/v2/accessToken',
         {
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body: {
                grant_type : 'authorization_code',
                code:code,
                client_id:'86kqhd6z3ywucx',
                client_secret:'qx7W3USeDp9hHtVs',
                redirect_uri:'http://localhost:3000/linkedin'
            },
          }).then(res=>console.log(res)).catch(err=>console.log(err))
        },
        onError: (error) => {
          console.log(error);
        },
      });

 if(googleuser || facebookuser){
        naviagate('/')
        if(googleuser){
            const func = async () => {
                await fetch('http://localhost:5000/api/v1/login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        user:googleuser
                    })
                     }).then(res=>res.json()).then(data=>{
                        
                     })
            }
    
            func()
        }
        if(facebookuser){
            const func = async () => {
                await fetch('http://localhost:5000/api/v1/login',{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                       user:facebookuser
                    })
                     }).then(res=>res.json()).then(data=>{
                        
                     })
            }
    
            func()
        }
       
 }

// =====sign in with google=====
    return (
        <div className=' max-w-[1200px] mx-auto pt-[40px]  pb-120px flex justify-center'>
            <div className=''>
                <div className=' mb-[40px] text-center'>
                <h2 className=' text-5xl font-[600] mb-4 leading-10'>Log in</h2>
                <p className=' font-[400] text-gray-500'>
                We are happy to see you back!
                </p>
                </div>
               {
                show ===1 ? <>
                <div className='text-center'>
                    <div className=' grid grid-cols-2 gap-4'>
                           <div className=' bg-blue-600 text-white px-10 py-3 flex items-center gap-2 rounded-md font-[600] cursor-pointer' onClick={()=>signInWithFacebookfunc()}>
                               <FontAwesomeIcon icon={faFacebook} className='text-xl mr-3 text-white'/>
                                Facebook
                           </div>
                          
                           <div className=' bg-[#DB4437] text-white px-10 py-3 flex items-center gap-2 rounded-md font-[600] cursor-pointer' onClick={()=>signInWithGooglefunc()}>
                               <FontAwesomeIcon icon={faGoogle} className='text-xl mr-3 text-white'/>
                                Goggle
                           </div>
                    </div>
                    <div className=' grid grid-cols-2 gap-4 mt-3'>
                     <div className=' bg-[#225695] text-white px-10 py-3 flex items-center gap-2 rounded-md font-[600] cursor-pointer' onClick={linkedInLogin}>
                               <FontAwesomeIcon icon={faLinkedin} className='text-xl mr-3 text-white'/>
                               Linkedin
                           </div>
                           <div className='  text-black border px-10 py-3 flex items-center gap-2 rounded-md font-[600] cursor-pointer' onClick={()=>setShow(2)}>
                               <FontAwesomeIcon icon={faEnvelope} className='text-xl mr-3 text-blue-500'/>
                                Email
                           </div>
                    </div>
                </div>
                <div className=' mt-4  flex justify-center font-[500]'>
                     <h2 className=' text-gray-500'>I am not registered - </h2>
                     <Link to='/signup' className=' text-blue-600'>Sign Up</Link>
                </div>
                </> : show ===2 ? <LoginEmail setShow={setShow}/> : null
               }
            </div>
        </div>
    );
};

export default Login;