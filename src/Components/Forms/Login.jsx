import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../../Context/AuthContext';

const Login = () => {
    const { login } = UseAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    console.log(error)

    const handleLogin = async (e) =>{
        e.preventDefault();

        try{
            await login(email, password)
            setError('');
            navigate('/account')

        } catch (e){
            setError(e.message);
            alert(e.message);
        }
    }


    return ( 
        <React.Fragment>
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        
                        <form action="" onSubmit={handleLogin}>
                            <label htmlFor="email" className='form-label'>Email:</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-input' />

                            <label htmlFor="password" className='form-label'>Password</label>
                            <input onChange={(e)=> setPassword(e.target.value)} type="password" className='form-input' />

                           
                            <p className='form-p'>Don't have an account? <Link to='/signup'><span className='form-span'>Sign Up </span></Link></p>

                            <button className='form-btn'>Login</button>
                        </form>

                    </div>

                </div>
        </React.Fragment>
     );
}
 
export default Login;