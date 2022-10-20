import React from 'react';
import TopBar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/Rightbar';
import './home.css'


function home(props) {
    return (
        <>
           <TopBar />
           <div className='homeContainer'>
                <Sidebar />
                <Feed />
                <RightBar />
           </div>
        </ >
    );
}

export default home;