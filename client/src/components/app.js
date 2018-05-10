import React from 'react';
import Test from './test';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';

const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
           <Test/>
        </div>
    </div>
);

export default App;
