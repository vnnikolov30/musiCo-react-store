import { useGetAllInstruments } from "./hooks/useInstruments";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/header/Navbar";
import Main from "./components/home/Main";

import GuitarAndBass from "./components/header/categories/GuitarsAndBass"
import Dj from "./components/header/categories/Dj"
import Drums from "./components/header/categories/Drums"
import Keys from "./components/header/categories/Keys"
import Studio from "./components/header/categories/Studio"

import Footer from "./components/home/Footer";
function App() {
  const allInstr = useGetAllInstruments();
  
  return (
    
    <>
    {JSON.stringify(allInstr)}
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/guitars-and-bass" element={<GuitarAndBass />} />
          <Route path="/dj" element={<Dj />} />
          <Route path="/drums" element={<Drums />} />
          <Route path="/keys" element={<Keys />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </Router>
      <Footer/>
      
    </>
  );
}

export default App;
