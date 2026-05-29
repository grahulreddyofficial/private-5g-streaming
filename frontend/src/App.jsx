import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainDash from './pages/MainDash';
import SmartCams from './pages/SmartCams';
import SmartHelmets from './pages/SmartHelmets';
import SmartPhones from './pages/SmartPhones';
import Drone5G from './pages/Drones5G';
import IIoT from './pages/IIoT';
import LoginPage from './pages/LoginPage';
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route 
      path="dashboard" 
      element={
        <ProtectedRoute>
          <MainDash />
        </ProtectedRoute>
      }>
        <Route path="smart-cams" element={<SmartCams />} />
        <Route path="smart-helmets" element={<SmartHelmets />} />
        <Route path="5g-smart-phones" element={<SmartPhones />} />
        <Route path="5g-drones" element={<Drone5G />} />
        <Route path="iiot" element={<IIoT />} />
      </Route>
    </Routes>
  );
}

export default App;