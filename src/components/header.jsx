'use client'
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ButtonLogin from './buttonLogin';
import ButtonLogout from './buttonLogout';

const Header = () => {

    const { isAuthenticated } = useAuth0();

    const url = typeof window !== 'undefined' ? window.location.pathname : '/';

    return (
        <header>
            <div className='box-1'>
                {isAuthenticated && (
                    <>
                        <ButtonLogout />
                    </>
                )}
                {url !== '/create-user' && !isAuthenticated && <ButtonLogin />}
            </div>
        </header>
    );
};

export default Header;