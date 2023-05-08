import { Routes,Route } from "react-router-dom";
import OutletContainer from "./Components/OutletContainer/OutletContainer";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";
import Login from "./Pages/Login/Login";
import ResumeTemplates from "./Components/ResumeTemplates/ResumeTemplates";
import Creative from "./Components/Creative/Creative";
import Professional from "./Components/Professional/Professional";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Christoper from "./Components/Resume/Christoper/Christoper";
import { createContext } from "react";
import { useState } from "react";

export const data = createContext()

function App() {
  
  const [allData,setAllData] = useState({
   ...(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : {})
  })
  return (
    <data.Provider value={{allData,setAllData}}>
    <div>
      <Routes>
        <Route  element={<OutletContainer />}>
        <Route path="/" element={<ResumeTemplate />}>
            <Route exact path='' element={<ResumeTemplates />}/>
            <Route exact path='/resume-templates/creative' element={<Creative/>}/>
            <Route exact path='/resume-templates/professional' element={<Professional/>}/>
          </Route>
         
         <Route path="/resume-templates" element={<ResumeTemplate />}>
            <Route exact path='' element={<ResumeTemplates />}/>
            <Route exact path='/resume-templates/creative' element={<Creative/>}/>
            <Route exact path='/resume-templates/professional' element={<Professional/>}/>
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
