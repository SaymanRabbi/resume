import React from 'react';
import useWidth from '../../../../hooks/useWidth';
import { useLocation } from 'react-router-dom';
import { data } from '../../../../App';
import { useContext } from 'react';

const References = () => {
    const width = useWidth()
    const path = useLocation().pathname.split('/')[2]
    const {allData} = useContext(data)
    const references = allData[path]?.references
    return (
        <div>
             <div className=' mt-3'>
                            {
                                references?.length>0 ? <>
                                <h2 className={`${width>=1280 || width<=480 || width<=768?"text-[14px]":"text-2xl  mb-3"} font-bold text-[#1B3055]`}>
                               References
                            </h2>
{
    references.map(referance => <div key={referance.id} className={`text-gray-700 References ${width>=1280 || width<=480 || width<=768?'':'my-2 '}`}>
    <h2 className={`ref_tittle font-bold ${width>=1280 || width<=480 || width<=768?"text-[8px]":""}`}>{referance?.name} { referance?.city}</h2>
    <h2 className={`font-medium ref_uni ${width>=1280 || width<=480 || width<=768?"text-[6px]":""}`}>{referance?.institute}</h2>
    <h2  className={`font-medium ref_id ${width>=1280 || width<=480 || width<=768?"text-[6px]":""}`}>{referance?.id}</h2>
    </div>)
}   
                                </> : null
                            }
                        </div>
        </div>
    );
};

export default References;