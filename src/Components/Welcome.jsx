import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className='w-2/3 px-16 py-16 cus-con'>

            <p className='form-p'>Already have an account? <Link to='/login'><span className='form-span'>Login </span></Link></p>

            <p className='form-p'>Don't have an account? <Link to='/signup'><span className='form-span'>Sign Up </span></Link></p>
        </div>
    )
}

export default Welcome