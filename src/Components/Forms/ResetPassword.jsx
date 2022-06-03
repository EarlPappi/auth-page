import { useState } from "react";
import { Link } from "react-router-dom";
import { UseAuth } from "../../Context/AuthContext";

const ResetPassword = () => {
    const { resetPasswword } = UseAuth();
    const [email, setEmail] = useState('')
    const handleReset = async (e) =>{
        e.preventDefault();
        
        try{
            await resetPasswword(email);
            alert("Email sent, check your mail to reset your password!")

        } catch (e){
            alert(e.message);
        }
    }

    
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">

                <form action="" onSubmit={handleReset}>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" className='form-input' placeholder="Enter Email"/>

                   
                    <p className='form-p'>Already have an account? <Link to='/login'><span className='form-span'>Login</span></Link></p>

                    <button className='form-btn'>Reset Password</button>
                </form>

            </div>

        </div>
);
}
 
export default ResetPassword;