import { faUser,faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
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
     const [firstname_error,setFirstname_error] = useState('')
     const [lastname_error,setLastname_error] = useState('')
     const [email_error,setEmail_error] = useState('')
     const [password_error,setPassword_error] = useState('')
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
        const email = e.target.email.value.toLowerCase();
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!firstName || !lastName || !password || !confirmpass || !email){
            toast.error('Please fill all the fields')
            return;
        }
        if( firstName.length < 2){
            toast.error('First name must be 2 characters long')
            setFirstname_error('first_name')
            return;
        }
        if( lastName.length < 3){
            toast.error('Last name must be 3 characters long')
            setLastname_error('last_name')
            return;
        } 
        if(!email.match(regex)){
            toast.error('Please enter valid email')
            setEmail_error('email')
            return;
        }
        if(password!==confirmpass){
          toast.error('Password not matched')
          setPassword_error('password')
          return;
        }
        const displayName = firstName + ' ' + lastName;
        const data = {
            email,
            password,
            displayName,
            photoURL:imgUrl || 'https://res.cloudinary.com/dnr5u3jpb/image/upload/v1684991367/su9auq96bhkz8n8xpxmx.webp'
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
                        e.target.reset()
                        setImgUrl('')
                    }
                    if(data?.message === "User already exists"){
                        toast.error('Gmail already exists try another one')
                    }
                 })
        }
        func()
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
            <div className='relative'>
            <label htmlFor="" className=' text-gray-400 pb-2'>First Name</label>
            <input type="text" name='firstname' className={`border-2  rounded-md p-2 w-full outline-none  py-[10px] ${firstname_error==='first_name'?"border-red-500":"border-gray-300 focus:border-b-blue-500"}`} onChange={()=>setFirstname_error('')}/>
            <FontAwesomeIcon icon={faCircleExclamation} className={`absolute text-red-500 right-2 top-10 ${firstname_error==='first_name'?"block":"hidden"}`}/>
            </div>
            <div className='relative'>
            <label htmlFor="" className=' text-gray-400 pb-2'>Last Name</label>
            <input type="text" className={`border-2 rounded-md p-2 w-full outline-none py-[10px] ${lastname_error==='last_name'?"border-red-500":"border-gray-300 focus:border-b-blue-500"}
            `} name='lastname' onChange={()=>setLastname_error('')}/>
            <FontAwesomeIcon icon={faCircleExclamation} className={`absolute text-red-500 right-2 top-10 ${lastname_error==='last_name'?"block":"hidden"}`}/>
            </div>
            </div>
            <div className='relative'>
            <label htmlFor="" className=' text-gray-400 pb-2'>Your Email</label>
            <input type="email" name='email' className={`border-2  rounded-md p-2 w-full outline-none  py-[10px] ${email_error==='email' ?"border-red-500":"border-gray-300 focus:border-b-blue-500"}`} />
            <FontAwesomeIcon icon={faCircleExclamation} className={`absolute text-red-500 right-2 top-10 ${email_error==='email'?"block":"hidden"}`}/>
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
            <div className='relative'>
            <label htmlFor="" className=' text-gray-400 pb-2'>Password</label>
            <input type="password" name='password' className={
                `border-2 rounded-md p-2 w-full outline-none py-[10px] ${password_error==='password'?"border-red-500":"border-gray-300 focus:border-b-blue-500"}`
            } onChange={()=>setPassword_error('')}/>
            </div>
           <div>
           <label htmlFor="" className=' text-gray-400 pb-2'>Confirm Password</label>
            <input type="password" name='confirmpass' className={   
                `border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px] ${password_error==='password'?"border-red-500":"border-gray-300 focus:border-b-blue-500"}`
            } onChange={()=>setPassword_error('')}/>
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