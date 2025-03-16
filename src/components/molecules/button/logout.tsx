import React from 'react';
// import { useAuth } from '~/services/authService';
import { IoIosExit } from "react-icons/io";

const Logout: React.FC = () => {

    return (
        <div className='flex justify-center bg-white rounded-lg p-2'>
            <button className='cursor-pointer text-3xl' style={{ color: '#483FFF' }}><IoIosExit /></button>
        </div>
    );
};

export default Logout;
