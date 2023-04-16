import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const {user, logoutUser} = useContext(AuthContext)

    const handleLogout = () =>{
        logoutUser()
        .then(result =>{
            
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">smart page</Link>
                <Link to="/orders" className="btn btn-ghost normal-case text-xl">Order</Link>
                <Link to="/profile" className="btn btn-ghost normal-case text-xl">Profile</Link>
                <div>
                    {
                        user ? <>
                        <span>{user.email}</span>
                        <Link to="/register" onClick={handleLogout} className="btn btn-ghost normal-case text-xl">Logout</Link>
                        </> : <>
                            <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                            <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;