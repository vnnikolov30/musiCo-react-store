import { useGetAllInstruments } from "./hooks/useInstruments";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Nav from "./components/header/Navbar";
import Main from "./components/home/Main";

import GuitarAndBass from "./components/header/categories/GuitarsAndBass";
import Dj from "./components/header/categories/Dj";
import Drums from "./components/header/categories/Drums";
import Keys from "./components/header/categories/Keys";
import Studio from "./components/header/categories/Studio";

import Footer from "./components/home/Footer";
import Instruments from "./components/header/categories/instruments/Instruments";
import Albums from "./components/header/categories/albums/Albums";
import LogIn from "./components/header/LogIn";
import SignUp from "./components/header/SignUp";
import { AuthProvider } from "./context/authContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/guitars-and-bass" element={<GuitarAndBass />} />
            <Route path="/dj" element={<Dj />} />
            <Route path="/drums" element={<Drums />} />
            <Route path="/keys" element={<Keys />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/instruments" element={<Instruments />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Router>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
