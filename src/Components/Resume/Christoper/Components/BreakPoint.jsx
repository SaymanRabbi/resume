import React from 'react';
import useWidth from '../../../../hooks/useWidth';

const BreakPoint = () => {
    const width = useWidth()
    return (
        <div>
            <hr className={` ${width>=1280 || width<=480 || width<=768?"my-1":"my-3"}`} />
        </div>
    );
};

export default BreakPoint;