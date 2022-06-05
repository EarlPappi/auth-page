import { useState } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";

const ResetPassword = () => {
    const { resetPasswword } = UseAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [message, setMessage] = useState('')

    const handleReset = async (e) => {
        e.preventDefault();

        if (email.trim().length === 0) {
            setIsValid(false);
            setError('Email cannot be empty');
            return;
        }

        if (isValid) {
            try {
                await resetPasswword(email);
                setMessage("Email sent, check your mail to reset your password!");
                return

            } catch (e) {
                setError(e.message);
                return;
            }

        }
    }


    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <form action="" onSubmit={handleReset} autoComplete='off'>
                    {error && <p className='error-p'> {error} </p>}
                    {message && <p className='success-p'> {message} </p>}

                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input autoComplete='off' onChange={(e) => setEmail(e.target.value)} type="email" className='form-input' placeholder="Enter Email" />


                    <p className='form-p'>Already have an account? <Link to='/auth/login'><span className='form-span'>Login</span></Link></p>

                    <button className='form-btn'>Reset Password</button>
                </form>

            </div>

        </div>
    );
}

export default ResetPassword;