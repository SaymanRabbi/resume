import React, { useContext } from 'react';
import Header from './Components/Header';
import BreakPoint from './Components/BreakPoint';
import UserInfo from './Components/UserInfo';
import useWidth from '../../../hooks/useWidth';
import { data } from '../../../App';
const Christoper = () => {
    const width = useWidth()
    const {allData} = useContext(data)
    const datas = allData?.toronto
    // w-[990px]
    return (
        <div id='toronto' className=' bg-[#EFF2F9] p-2 w-[100%] h-[100%] rounded-[6px]  overflow-x-scroll overflow-y-scroll'>
             <div className={`${width>=1280 || width<=480 || width<=768?" w-[100%] h-[100%]":""}? py-0 px-4`}>
                <Header datas={datas?.personal_details}/>
                <BreakPoint/>
                <UserInfo/>
                </div>
    </div>
    );
};

export default Christoper;