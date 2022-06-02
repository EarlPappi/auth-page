import React from 'react'

const FormCon = ({ children }) => {
    return ( 
        <div className='w-2/3 px-16 py-16 cus-con'>
            <h2 className='text-3xl text-blue-700 font-bold text-center'>Set Up Your Garwish Account</h2>

            {children}
        </div>
     );
}
 
export default FormCon;