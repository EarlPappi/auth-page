import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UseAuth } from '../Context/AuthContext'

function Home() {
    const { logout } = UseAuth();
    const navigate = useNavigate();

    const { user } = UseAuth();


    const handleLogout = async ()=>{
        try{   
            await logout();
            navigate('/');

        } catch(e){
            alert(e.message);
        }

    }
  return (
    <div>
        <h2 className='dem-h2'>You are logged in as: { user.email } </h2>
        <button className='form-btn' onClick={ handleLogout}>Logout</button>
    </div>
  )
}

export default Home