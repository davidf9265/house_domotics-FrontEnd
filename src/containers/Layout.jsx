import React from 'react';
import '../styles/layout.scss'

const Layout = ({children}) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    );
};

export default Layout;