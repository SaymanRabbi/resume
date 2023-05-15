import { Routes,Route } from "react-router-dom";
import OutletContainer from "./Components/OutletContainer/OutletContainer";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";
import Login from "./Pages/Login/Login";
import ResumeTemplates from "./Components/ResumeTemplates/ResumeTemplates";
import Creative from "./Components/Creative/Creative";
import Professional from "./Components/Professional/Professional";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Christoper from "./Components/Resume/Christoper/Christoper";
import { createContext, useRef } from "react";
import { useState } from "react";

export const data = createContext()

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  
  const [allData,setAllData] = useState({
   ...(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {})
  })
  return (
    <data.Provider value={{allData,setAllData}}>
    <div>
      <Routes>
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
        </Route>
        <Route path="/resume_builder/:id" element={<ResumeBuilder />}/>
        <Route path="/toronto" element={<Christoper/>}/>
        </Routes>
    </div>
    </data.Provider>
  );
}

export default App;
