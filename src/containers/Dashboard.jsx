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
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className='main-visual'></div>
                    <div>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className='right-toolbar'>
                    
                </div>
            </div>
        </div>
    );
};

export default Dashboard;