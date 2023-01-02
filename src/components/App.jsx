import React from 'react';
import Dashboard from '../containers/dashboard';
import Layout from '../containers/Layout';
import '../styles/global.scss'; 

const App = () => {
    return (
        <Layout>
            <Dashboard />
        </Layout>
    );
};

export default App;