import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [imgUrl,setImgUrl] = useState( ''
      );
      const cloudinaryRef = useRef();
      const refToInput = useRef(null);
      const navigate = useNavigate();
      // ---add image to cloudinary----
      cloudinaryRef.current = window.cloudinary
      refToInput.current= cloudinaryRef.current.createUploadWidget({
          cloudName: 'dnr5u3jpb',
          uploadPreset: 'byni9vwa',
      },(error,result)=>{
            if(result.info.secure_url ){
              setImgUrl(result.info.secure_url)
            }
      })
      const Login = (e)=>{
        e.preventDefault();
        const firstName = e.target.firstname.value;
        const lastName = e.target.lastname.value;
        const password = e.target.password.value;
        const confirmpass = e.target.confirmpass.value;
        const email = e.target.email.value;
        if(!firstName || !lastName || !password || !confirmpass || !email){
            toast.error('Please fill all the fields')
            return;
        }
        if(password!==confirmpass){
          toast.error('Password not matched')
          return;
        }
        const displayName = firstName + ' ' + lastName;
        const data = {
            email,
            password,
            displayName,
            photoURL:imgUrl
        }
        const func = async () => {
            await fetch('http://localhost:5000/api/v1/customLogin',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    data
                })
                 }).then(res=>res.json()).then(data=>{
                    if(data?.data && data?.message === "User created successfully"){
                        localStorage.setItem('user',JSON.stringify(data?.data))
                        toast.success('User created successfully')
                        setTimeout(() => {
                            navigate('/')
                        }, 2000);
                    }
                 })
        }
        func()
        setImgUrl('')
        e.target.reset()
      }
       // ---add image to cloudinary----
    return (
        <div className=' w-[400px] mx-auto' >
            <div className=' mb-[20px] text-center'>
                <h2 className=' text-5xl font-[600] mb-4 leading-10'>Sign in</h2>
                <p className=' font-[400] text-gray-500'>
                We are happy to see you!
                </p>
                </div>
       
        <form action="" onSubmit={Login} >
            <div className=' flex justify-between gap-x-4'>
            <div>
            <label htmlFor="" className=' text-gray-400 pb-2'>First Name</label>
            <input type="text" name='firstname' className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]' required/>
            </div>
            <div>
            <label htmlFor="" className=' text-gray-400 pb-2'>Last Name</label>
            <input type="text" className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]' required name='lastname'/>
            </div>
            </div>
            <div>
            <label htmlFor="" className=' text-gray-400 pb-2'>Your Email</label>
            <input type="email" name='email' className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]' required/>
            </div>
            <div className={`w-[100%] flex gap-x-4 pt-[8px] h-[50px] items-center cursor-pointer`} onClick={()=>refToInput.current.open()}>
                        {
                          imgUrl?<>
                          <img src={imgUrl} alt="" className='w-[50px] h-[50px] rounded-full'/>
                          
                          </>
                          :<>
                           <div className=' flex justify-center items-center w-[50px] h-[50px] rounded-full border-2 border-blue-400 p-1'>
                           <FontAwesomeIcon icon={faUser} className=' text-2xl text-blue-500'/>
                           </div>
                        <span className=' font-[400] text-blue-500'> Upload profile Picture</span>
                          </>
                        }
                       
                   </div>
            <div className=' flex justify-between gap-x-4'>
            <div>
            <label htmlFor="" className=' text-gray-400 pb-2'>Password</label>
            <input type="password" name='password' className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]'/>
            </div>
           <div>
           <label htmlFor="" className=' text-gray-400 pb-2'>Confirm Password</label>
            <input type="password" name='confirmpass' className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]'/>
           </div>
            </div>
            <div className=' mt-[20px] flex justify-between'>
               <button className=' px-5 py-3 rounded-md font-bold border bg-blue-500 text-white' type='submit'>Confirm</button>
            </div>
        </form>
        </div>
    );
};

export default SignUp;