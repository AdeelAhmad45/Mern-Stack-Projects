import "./App.css";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import  AllUser from "./components/AllUser"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/alluser" element={<AllUser />}/>
        <Route path="/adduser" element={<AddUser />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
