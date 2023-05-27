import React from 'react';
import { useState } from 'react';
import { BounceLoader } from 'react-spinners';

const Spiner = () => {
    let [color, setColor] = useState("#3B82F6");
    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <BounceLoader 
            color={color}  
        size={50}
        aria-label="Loading"
        data-testid="loader"
      />
        </div>
    );
};

export default Spiner;