import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  MainPage,
  RegisterPage,
  ContactPage,
  NotFoundPage,
} from "./pages/index";
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

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      </div>
    </>
  );
}

export default App;
