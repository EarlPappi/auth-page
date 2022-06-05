import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Layout/SideBar";
import FormCon from "../FormCon";


const AuthTab = () => {
    return ( 
        <React.Fragment>
            <SideBar/>

            <FormCon>
                <Outlet/>
            </FormCon>
        </React.Fragment>
     );
}
 
export default AuthTab;