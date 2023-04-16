import { Routes,Route } from "react-router-dom";
import OutletContainer from "./Components/OutletContainer/OutletContainer";
import Home from "./Pages/Home";
import ResumeTemplate from "./Pages/ResumeTemplate/ResumeTemplate";
import Login from "./Pages/Login/Login";
import ResumeTemplates from "./Components/ResumeTemplates/ResumeTemplates";
import Creative from "./Components/Creative/Creative";
import Professional from "./Components/Professional/Professional";
import ResumeBuilder from "./Pages/ResumeBuilder";


function App() {
  return (
    <div>
      <Routes>
        <Route  element={<OutletContainer />}>
         <Route path="/" element={<Home />}/>
         
         <Route path="/resume-templates" element={<ResumeTemplate />}>
            <Route exact path='' element={<ResumeTemplates />}/>
            <Route exact path='/resume-templates/creative' element={<Creative/>}/>
            <Route exact path='/resume-templates/professional' element={<Professional/>}/>
          </Route>
        <Route path="/login" element={<Login/>} />
        </Route>
        <Route path="/resume_builder" element={<ResumeBuilder />}/>
        </Routes>
    </div>
  );
}

export default App;
