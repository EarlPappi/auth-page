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

    const handleSignup = async (e) =>{
        e.preventDefault();
        console.log(password, confirmPassword)

        if(password !== confirmPassword){
            alert("Password did not match")
            return;
        }

        console.log("Password Matched")


        try{
            await signup(email, password);
            setError('');
            navigate('/login');

        } catch (e) {
            alert(e.message);
            setError(e.message);
            console.log(error)
        }
    }

    return (
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">

                    <form action="" onSubmit={handleSignup}>
                        <label htmlFor="email" className='form-label'>Email:</label>
                        <input onChange={(e)=> setEmail(e.target.value)} type="email" className='form-input' />

                        <label htmlFor="password" className='form-label'>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-input' />

                        <label htmlFor="password" className='form-label'>Confirm Password</label>
                        <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className='form-input' />
                        <p className='form-p'>Already have an account? <Link to='/login'><span className='form-span'>Login</span></Link></p>

                        <button className='form-btn'>Sign Up</button>
                    </form>

                </div>

            </div>
    );
}

export default Signup;