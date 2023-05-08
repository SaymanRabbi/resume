import React, { useEffect, useRef, useState } from 'react';
import Titttle from './Titttle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../../../../App';

const PerosonalDetails = () => {
  const cloudinaryRef = useRef();
  const {allData,setAllData } = useContext(data)
  const path = useLocation().pathname.split('/')[2]
  const personal_details = allData[path]?.personal_details
  const [tittle,setTittle] = useState(
    personal_details?.tittle || ''
  );
  const [firstName,setFirstName] = useState(
    personal_details?.firstName || ''
  );
  const [lastName,setLastName] = useState(
    personal_details?.lastName || ''
    );
    const [email,setEmail] = useState(
      personal_details?.user_email || ''
      );
  const [phone,setPhone] = useState(
   personal_details?.user_phone || ''
  );
  const [country,setCountry] = useState(
    personal_details?.user_country || ''
  );
  const [city,setCity] = useState(
    personal_details?.user_city || ''
  );
  const [address,setAddress] = useState(
    personal_details?.user_address || ''
  );
  const [postalCode,setPostalCode] = useState(
    personal_details?.user_postal_code || ''
  );
  const [driving,setDriving] = useState(
    personal_details?.driving || ''
  );
  const [nationality,setNationality] = useState('');
  const [pop,setPop] = useState(false);
  const [dob,setDob] = useState('');
  const [imgUrl,setImgUrl] = useState(
    allData[path]?.personal_details?.imgUrl || ''
  );
    const refToInput = useRef(null);
    const [show, setShow] = useState(false);
    const onSubmit  = (e) => {
      e.preventDefault();
      if(e.target.name==='tittle'){
       const value= e.target.value;
       setTittle(value);
      }
      if(e.target.name==='first_name'){
        setFirstName(e.target.value);
      }
      if(e.target.name==='last_name'){
        setLastName(e.target.value);
      }
      if(e.target.name==='email'){
        setEmail(e.target.value);
      }
      if(e.target.name==='phone'){
        setPhone(e.target.value);
      }
      if(e.target.name==='country'){
        setCountry(e.target.value);
      }
      if(e.target.name==='city'){
        setCity(e.target.value);
      }
      if(e.target.name==='address'){
        setAddress(e.target.value);
      }
      if(e.target.name==='postal_code'){
        setPostalCode(e.target.value);
      }
      const data = {
        firstName,lastName,
        tittle,
        user_email: email,
        user_phone: phone,
        user_address: address + ' ' + city + ' '+ country + postalCode,
        user_country: country,
        user_city: city,
        user_postal_code: postalCode,
        user_driving_license: driving,
      }
      setAllData({...allData,
        [path]:{
          ...allData[path],
          personal_details:
          {
            ...allData[path]?.personal_details,
            ...data 
          }
        }
      })
    }
    useEffect(()=>{
      cloudinaryRef.current = window.cloudinary
      refToInput.current= cloudinaryRef.current.createUploadWidget({
          cloudName: 'dnr5u3jpb',
          uploadPreset: 'byni9vwa',
      },(error,result)=>{
            if(!error && result.info.secure_url ){
              setImgUrl(result.info.secure_url)
              setAllData({...allData,
                [path]:{
                  ...allData[path],
                  personal_details:
                  {
                    ...allData[path]?.personal_details,
                     imgUrl:result.info.secure_url
                  }
                }
              })
            }
      })
  },[])
  useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(allData))
  },[allData])
    return (
        <div>
            <Titttle tittle='Personal Details'/>
            <div className=' mb-4'>
            </div>
            <form onKeyUp={(e)=>onSubmit(e)}>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input  label='Wanted Job Title' placeHolder={`${personal_details?.tittle?personal_details?.tittle:"e.g Teacher"}`} attributename='tittle'/>
                   <div className=' relative mt-4'>
                   <div className={`w-[100%] flex gap-x-4 pt-[14px] h-[74px] items-center ${path==='amsterdam'?"":"cursor-pointer"}`} onClick={()=>refToInput.current.open()}>
                        {
                          imgUrl?<>
                          <img src={imgUrl} alt="" className='w-[50px] h-[50px] rounded-full'/>
                          <span className=' font-[400] text-blue-500'> Update Photo</span>
                          </>
                          :<>
                          {
                          path==='amsterdam'? "": <FontAwesomeIcon icon={faUser} className=' text-4xl text-blue-500'/>
                        }
                        {
                          path==='amsterdam'? <span className=' font-[400] text-gray-500'> This Template Doesn't support photo upload</span>: <span className=' font-[400] text-blue-500'> Upload Photo</span>
                        }
                          </>
                        }
                       
                   </div>
                   </div>
                   <div>

                   </div>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input attributename='first_name' label='First Name' placeHolder={`${firstName?firstName:"Your First Name"}`}/>
                     <Input attributename='last_name' label='Last Name' placeHolder={`${lastName?lastName:"Your last Name"}`}/>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input attributename='email' label='Email' placeHolder={`${email?email:""}`}/>
                     <Input label='Phone' attributename='phone' placeHolder={`${phone?phone:""}`}/>
                </div>
                <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'>
                   <Input label='Country' attributename='country' placeHolder={`${country?country:""}`}/>
                     <Input label='City' attributename='city' placeHolder={`${city?city:""}`}/>
                </div>
               {
                     show && <div>
                        <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input attributename='address' label='Address' placeHolder=''/>
                       <Input label='Postal Code' attributename='postal_code' placeHolder=''/>
                     </div>
                     <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Driving License' attributename='driving' placeHolder=''/>
                       <Input label='Nationality' placeHolder='' attributename='nationality'/>
                     </div>
                     <div className=' grid md:grid-cols-2 md:gap-10 grid-cols-1 gap-2'> 
                       <Input label='Place Of Birth' placeHolder='' attributename='place_of_birth'/>
                       <Input label='Date Of Birth' placeHolder='' attributename='date_of_birth'/>
                     </div>
                     </div>
               }
                <div className=' mt-4 flex gap-3 items-center  font-[500] text-blue-500 cursor-pointer'>
                <h2 className='' onClick={()=>setShow(!show)}>
                  
                   {show ? 'Hide' : 'Show'} More Details
                </h2>
                <FontAwesomeIcon icon={show?faAngleUp:faAngleDown } onClick={()=>setShow(!show)}/>
                </div>
            </form>
        </div>
    );
};

export default PerosonalDetails;