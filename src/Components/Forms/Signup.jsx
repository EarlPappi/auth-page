import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";


const Signup = () => {
    const { signup } = UseAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [isValid, setIsValid] = useState(true);
    const [isError, setIsEror] = useState(false);
    const [isLoading, setisLoading] = useState(false);
 
    const handleSignup = async (e) => {
        e.preventDefault();
        setisLoading(true);

        if (email.trim().length === 0 || password.trim().length === 0) {
            setIsValid(false);
            setIsEror(true);
            setError('Email or password cannot be empty');
            setisLoading(false);
            return
        }


        if (password !== confirmPassword) {
            setError("Password did not match");
            setIsEror(true);
            setisLoading(false);
            return;
        }

        if (isValid) {
            try {
                await signup(email, password);
                setError('');
                navigate('/auth/login');
                setIsEror(false);
                setisLoading(false);
                return;

            } catch (e) {
                setError(e.message);
                setIsEror(false);
                setisLoading(false);
                return;
            }
        }
    }

    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <form action="" onSubmit={handleSignup}>
                      { isError }
                    {/* {isError && <p className='error-p'> {error && error}</p>} */}
                    { error && <p className='error-p'> {error} </p> }


                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input onChange={(e) => { setEmail(e.target.value); setIsEror(false) }} type="email" className='form-input' placeholder="Enter email" />

                    <label htmlFor="password" className='form-label'>Password</label>
                    <input onChange={(e) => { setPassword(e.target.value); setIsEror(false) }} type="password" className='form-input' placeholder="Enter password" />

                    <label htmlFor="password" className='form-label'>Confirm Password</label>
                    <input onChange={(e) => { setConfirmPassword(e.target.value); setIsEror(false) }} type="password" className='form-input' placeholder="Confirm password" />
                    <p className='form-p'>Already have an account? <Link to='/auth/login'><span className='form-span'>Login</span></Link></p>

                    <button className='form-btn' disabled={isLoading}>{ isLoading ? 'Signing up...' : 'Sign up' }</button>
                </form>

            </div>

        </div>
    );
}

export default Signup;