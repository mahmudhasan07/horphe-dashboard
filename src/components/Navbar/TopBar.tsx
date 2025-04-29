import { RootState } from '@/Redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import image from '@/assests/no-face.png'

const TopBar = () => {
    const user = useSelector((state: RootState) => state.Auth as { name: string; role: string; image?: string });

    return (
        <div>
            <div>
                <img src={user.image || image.src} alt="User" className="w-16 h-16 rounded-full" />
            </div>
            <div>
                <h1>{user.name}</h1>
                <h1>{user.role}</h1>
            </div>
        </div>
    );
};

export default TopBar;