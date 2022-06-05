import React from "react";
import Wrapper from "./Layout/Wrapper";
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
import Welcome from "./Components/Welcome";
import { ContextProvider } from "./Context/AuthContext";
import Home from "./Components/Home";
import ResetPassword from "./Components/Forms/ResetPassword";
import AuthTab from "./Components/Forms/AuthTab";


function App() {
  return (
    <ContextProvider>
      <Wrapper>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="auth" element={<AuthTab />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="account" element={<Home />} />
          </Route>



        </Routes>
      </Wrapper>
    </ContextProvider>
  );
}

export default App;
