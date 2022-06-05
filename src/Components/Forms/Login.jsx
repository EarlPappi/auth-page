import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuth } from '../../Context/AuthContext';
const Login = () => {
    const { login } = UseAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsEror] = useState(false);
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setisLoading(true);

        if (email.trim().length === 0 || password.trim().length === 0) {
            setIsValid(false);
            setisLoading(false);
            setError('Email or password cannot be empty')
            return
        }

        if (isValid) {
            try {
                await login(email, password);
                setisLoading(false);
                setError('');
                navigate('/auth/account');
                setIsEror(false);
                return;

            } catch (e) {
                setError(e.message);
                setisLoading(false);
                setIsEror(true);
                return;
            }
        }
    }


    return (
        <React.Fragment>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">


                    { isError }
                    {/* {isError && <p className='error-p'> {error}</p>} */}
                    { error && <p className='error-p'> {error} </p> }
                    <form action="" onSubmit={handleLogin}>
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-input' />

                        <label htmlFor="password" className='form-label'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-input' />


                        <p className='form-p'>Don't have an account? <Link to='/auth/signup'><span className='form-span'>Sign Up </span></Link></p>
                        <p className='form-p'>Forgot password? <Link to='/auth/resetpassword'><span className='form-span'>Reset Password</span></Link></p>

                        <button className='form-btn' disabled={isLoading}>{ isLoading ? 'Logging in...' : 'Login' }</button>
                    </form>

                </div>

            </div>
        </React.Fragment>
    );
}

export default Login;