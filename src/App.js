import React from "react";
import FormCon from "./Components/FormCon";
import SideBar from "./Layout/SideBar";
import Wrapper from "./Layout/Wrapper";
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Forms/Login";
import Signup from "./Components/Forms/Signup";
import Welcome from "./Components/Welcome";
import { ContextProvider } from "./Context/AuthContext";
import Home from "./Components/Home";
import ResetPassword from "./Components/Forms/ResetPassword";


function App() {
  return (
    <ContextProvider>
      <Wrapper>
        <SideBar />
        <FormCon>
          <Routes>
            <Route path="/" element={ <Welcome/> }/>
            <Route path='/login' element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="/account" element={ <Home/>}/>
            <Route path="/resetpassword" element={ <ResetPassword/>}/>
          </Routes>
        </FormCon>
      </Wrapper>
    </ContextProvider>
  );
}

export default App;
