import React from 'react';
import '../styles/dashboard.scss'
import '../styles/house-top-view.scss'
import gear from '../../resources/gear.png'

const Dashboard = () => {
    return (
        <div className='app-grid'>
            <div class= "w3-bar" className='header-options'>
                <div class="w3-bar-item w3-left">user</div>
                <div class="w3-bar-item">voice assistant: enabled</div>
                <div class="w3-bar-item">YYYY-MM-DD</div>
                <div class="w3-bar-item">hh:mm:ss</div>
                <img src={gear} alt="" />
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
                    <div className='main-visual'>
                        <div className='group'>
                            <div className='rectangle_1'></div>
                            <div className='rectangle_2'></div>
                            <div className='rectangle_3'></div>

                            <div className='rectangle_4'></div>
                            <div className='rectangle_5'></div>
                            <div className='rectangle_6'></div>

                            <div className='rectangle_7'></div>
                            <div className='rectangle_8'></div>
                            <div className='rectangle_9'></div>
                        </div>

                    </div>
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