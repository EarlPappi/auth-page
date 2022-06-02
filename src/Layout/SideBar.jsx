import React from 'react';
import Cart from '../Asset/Cart.png'

const SideBar = () => {
    return ( 
        <div className='bg-blue-600 w-1/3 min-h-full flex flex-col cus-q'>
            <div className='container mx-auto px-4 py-8'>
                <h2 className='text-white text-4xl font-bold mb-8 cus-h2'>
                Manage your shopping experience with Zero worries!
                </h2>

                <ul className='px-8'>
                    <li className='text-2xl list-disc text-white mb-4 cus-li'>Get to Keep track of  what  to buy, without losing your list.</li>
                    <li className='text-2xl list-disc text-white cus-li'>Have 100 percent funtime while Shopping!</li>
                </ul>
            </div>

            <div>
                <img src={ Cart } alt="" className=''/>
                
            </div>

        </div>
     );
}
 
export default SideBar;