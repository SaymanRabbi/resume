import { Routes,Route } from "react-router-dom";
import Christoper from "./Components/Christoper/Christoper";
import Sebastian from "./Components/Sebastian/Sebastian";
import Petrica from "./Components/Petrica/Petrica";
import Gregory from "./Components/Gregory/Gregory";
import Shophie from "./Components/Shophie/Shophie";
import Westurner from "./Components/Westurner/Westurner";
import Tim from "./Components/Tim/Tim";
import IsabelMaher from "./Components/IsabelMaher/IsabelMaher";
import Vince from "./Components/Vince/Vince";
import Elsa from "./Components/Elsa/Elsa";
import Monica from "./Components/Monica/Monica";
import Daryal from "./Components/Daryal/Daryal";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Christoper />} />
        <Route path="/sebastian" element={<Sebastian />} />
        <Route path="/petrica" element={<Petrica />} />
        <Route path="/gregory" element={<Gregory />} />
        <Route path="/shophie" element={<Shophie />} />
        <Route path="/westurner" element={<Westurner />} />
        <Route path="/tim" element={<Tim />} />
        <Route path="/isabel" element={<IsabelMaher />} />
        <Route path="/vince" element={<Vince />} />
        <Route path="/elsa" element={<Elsa />} />
        <Route path="/monica" element={<Monica />} />
        <Route path="/daryal" element={<Daryal />} />
        </Routes>
    </div>
  );
}

export default App;
