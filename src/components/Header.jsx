import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-primary text-primary-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">smart page</Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">register</Link>
            </div>
        </>
    );
};

export default Header;