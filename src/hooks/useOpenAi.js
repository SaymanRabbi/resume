import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const useOpenAi = (data) => {
    const [skills, setSkills] = useState("")
    const skill = data
    useEffect(() => {
       const getdata = async () => { 
      await axios.post("http://localhost:5000/api/v1/skill", {skill}).then((res) => {
              setSkills(res.data)
              console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
       }
         getdata()
    }, [data])

    return skills
}

export default useOpenAi