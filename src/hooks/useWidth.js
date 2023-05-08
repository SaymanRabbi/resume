import { useEffect, useState } from "react";

const useWidth = () => {
    const [widht, setWidth] = useState(window.innerWidth);
    const setDimension = () => {
        setWidth(window.innerWidth);
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [widht])
 return widht;
}

export default useWidth;