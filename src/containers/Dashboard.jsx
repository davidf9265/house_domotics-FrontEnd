import React from 'react';
import '../styles/dashboard.scss'
//import '../styles/global.scss'

const Dashboard = () => {
    return (
        <div className='app-grid'>
            <div className='header-options'>
                AQUI VAN LAS COSAS DE ARRIBA DE LA PÁGINA
            </div>
            <div className='dashboard-interactive'>
                <div className='left-toolbar'>

                </div>
                <div className='middle-toolbar'>
                    <div className='upper-options'>
                        <button className='data-stats-button'>DATA / STATS</button>
                        <button className='dashboard-button'>DASHBOARD</button>
                        <button className='security-button'>SECURITY</button>
                    </div>
                    <div className='main-visual'></div>
                    <div className='lower-options'>
                        <button className='hydro-system-button'>HYDRO SYSTEM</button>
                        <button className='users-button'>USERS</button>
                        <button className='lab-button'>LAB</button>
                    </div>
                </div>
                <div className='right-toolbar'>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;