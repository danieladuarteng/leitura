import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <Link
            to="/"
        >
            <div className="home">
                <h1><strong>Leitura</strong></h1>
            </div>
        </Link>
    )
};

export default Header

