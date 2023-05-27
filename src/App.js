import { Routes,Route } from "react-router-dom";
import OutletContainer from "./Components/OutletContainer/OutletContainer";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";
import Login from "./Pages/Login/Login";
import ResumeTemplates from "./Components/ResumeTemplates/ResumeTemplates";
import Creative from "./Components/Creative/Creative";
import Professional from "./Components/Professional/Professional";
import ResumeBuilder from "./Pages/ResumeBuilder";
import { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import Profile from "./Pages/Profile/Profile";
import SignUp from "./Pages/SignUp/SignUp";
import ProtectedRoute from "./Components/OutletContainer/ProtectedRoute";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.init";
import useGetResume from "./hooks/useGetResume";
import Spiner from "./Components/Spiner";
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import Blog from "./Pages/Blog/Blog";
import Faq from "./Pages/Faq/Faq";
export const data = createContext()

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const [user,loading] = useAuthState(auth)
  const Resumedata =  useGetResume(user?.email)
  const [allData,setAllData] = useState({
    ...(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {})
  })
  useEffect(() => {
    setAllData({
      ...(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {}),
      ...(Resumedata ? {
        [Resumedata?.resumeId] :{
          ...Resumedata
        }
      } : {})
    })
  }, [Resumedata])
  if(loading) return <Spiner/>
  return (
    <data.Provider value={{allData,setAllData}}>
    <div>
      <Routes>
      <Route exact path='/linkedin' element={ < LinkedInCallback /> } />
        <Route  element={<OutletContainer  handleClick={handleClick}/>}>
        <Route path="/" element={<ResumeTemplate  handleClick={handleClick}/>}>
            <Route exact path='' element={<ResumeTemplates refar={ref}/>}/>
            <Route exact path='/resume-templates/creative' element={<Creative refar={ref}/>}/>
            <Route exact path='/resume-templates/professional' element={<Professional refar={ref}/>}/>
          </Route>
         
         <Route path="/resume-templates" element={<ResumeTemplate handleClick={handleClick}/>}>
            <Route exact path='' element={<ResumeTemplates refar={ref}/>}/>
            <Route exact path='/resume-templates/creative' element={<Creative refar={ref}/>}/>
            <Route exact path='/resume-templates/professional' element={<Professional refar={ref}/>}/>
          </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/app/profile" element={<Profile />}/>
         <Route path="/blog" element={<Blog/>}/>
         <Route path ='/faq' element={<Faq/>}/>
        </Route>
          <Route element={<ProtectedRoute/>}>
          <Route path="/resume_builder/:id" element={<ResumeBuilder />}/>
            </Route>
        </Routes>
        <Toaster
         position="top-right"
         reverseOrder={false}
        />
    </div>
    </data.Provider>
  );
}

export default App;
