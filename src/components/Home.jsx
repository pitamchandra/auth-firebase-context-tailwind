import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)

    return (
        <div>
            {
                user && <span>{user.name}</span>
            }
        </div>
    );
};

export default Home;