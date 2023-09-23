import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/main-page";
import RegisterPage from "./pages/Register-page";
import ContactPage from "./pages/contact-page";
import NavBar from "./components/header/NavBar";

function App() {
  return (
    <>
      <div className="whole">
        <NavBar />
        <>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </>
      </div>
    </>
  );
}

export default App;
