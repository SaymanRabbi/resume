import { useEffect } from "react";
import { useRef } from "react";

const UploadWidegest = () => {
    const cloudinaryRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary
        cloudinaryRef.current.createUploadWidget({
            cloudName: 'dnr5u3jpb',
            uploadPreset: 'byni9vwa',
        },(error,result)=>{

        })
    },[])

}

export default UploadWidegest;