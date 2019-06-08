import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
    const style = {
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };
    return (
        <div>
            <h3 style={style}>
                <Link className="nav-link" to="/">Home</Link>
            </h3>
            <h3 style={style}> 
                <Link className="nav-link" to="/jokes">Jokes</Link>
            </h3>
            {children}
        </div>
    );
};

export default Header;
