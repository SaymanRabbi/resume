import React, { useContext, useEffect } from 'react';
import Header from './Components/Header';
import BreakPoint from './Components/BreakPoint';
import UserInfo from './Components/UserInfo';
import useWidth from '../../../hooks/useWidth';
import { data } from '../../../App';
import domtoimage from 'dom-to-image';

const Christoper = () => {
    console.log('hello')
    const widht = useWidth()
    const {allData,setAllData} = useContext(data)
    console.log(allData)
useEffect(() => {
    console.log('hello')
    const node = document.getElementById('toronto')
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        console.log(dataUrl)
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}, [allData])
    const datas = allData?.toronto
    return (
        <div id='toronto' className=' bg-[#EFF2F9] p-2 w-[100%] h-[100%] rounded-[6px] overflow-hidden'>
       <div className={`${widht>1280?" w-[100%] h-[100%]":"py-0 px-4  w-[100%]  mx-auto"}?`}>
       <Header datas={datas?.personal_details}/>
       <BreakPoint/>
       <UserInfo/>
       </div>
    </div>
    );
};

export default Christoper;