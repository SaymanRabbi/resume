import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginEmail = ({setShow}) => {
    const navigate = useNavigate();
    const Login = (e) => {
            e.preventDefault()
            const email = e?.target?.email?.value.toLowerCase();
            const password = e?.target?.password?.value;
            console.log(email,password)
            if(!email || !password){
                toast.error('Please fill all the fields')
                return;
            }
            const data = {
                email,
                password
            }
            const func = async () => {
                await fetch('http://localhost:5000/api/v1/customloginuser',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    data
                })
                 }).then(res=>res.json()).then(data=>{
                    if(data?.message === "User not found"){
                        toast.error('User not found')
                        return;
                    }
                    if(data?.message === "Password not matched"){
                        toast.error('Password not matched')
                        return;
                    }
                    if(data?.data && data?.message === "Login successfully"){
                        localStorage.setItem('user',JSON.stringify(data?.data))
                        toast.success('User Login successfully')
                        navigate('/')
                    }
                 })
            }
            func()
    }
    return (
        <form action="" className=' w-[400px]'  onSubmit={Login}>
            <label htmlFor="" className=' text-gray-400 pb-2'>Email</label>
            <input type="email" name='email' className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]' required/>
            <label htmlFor="" className=' text-gray-400 pb-2'>Password</label>
            <input type="password" name='password' className='border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:border-b-blue-500 py-[10px]' required/>
            <div className=' mt-[40px] flex justify-between'>
               <button className=' px-5 py-3 rounded-md font-bold border' onClick={()=>setShow(1)}>Back</button>
               <button className=' px-5 py-3 rounded-md font-bold border bg-blue-500 text-white' type='submit'>Continue</button>
            </div>
        </form>
    );
};

export default LoginEmail;