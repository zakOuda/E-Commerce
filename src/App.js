import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";

//Main App React for admin
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<DashBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
