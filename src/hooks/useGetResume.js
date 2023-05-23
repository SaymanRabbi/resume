import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useGetResume = (data) => {
    const [resume,setResume] = useState(null)
     useEffect(() => {
        const getData = async () => {
          const datas =  await axios.get(`http://localhost:5000/api/v1/getResume/${data}`)
            .then(res => {
                return res?.data?.data
            }
            )
            setResume(datas)
        }
        getData()
     }, [data])
    return resume
}

export default useGetResume;