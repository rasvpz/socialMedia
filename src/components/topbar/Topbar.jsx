import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';

import "./topbar.css"

function Topbar(props) {
    return (
        <div className='topBarContainer'>
            <div className="topBarLeft">
                <span className="log">LamaSocial</span>
            </div>
            <div className="topBarCenter">
                <div className="searchBar"> 
                <SearchIcon className='searchIcon' />
                <input placeholder='Search for friends' type="text" className="searchInput" /> 
                </div>
            </div>
            <div className="topBarRight">
                <div className="topBarLinks">
                    <span className="topBarLink">Homepage </span>
                    <span className="topBarLink"> Timeline</span>
                </div>
                <div className="topBarIcons">
                        <span className="topBarIconItems">
                            <PersonIcon />
                            <span className="topBarIconBadge">1</span>
                        </span>
                    </div>                     
                    <div className="topBarIcons">
                        <span className="topBarIconItems">
                            <ChatIcon />
                            <span className="topBarIconBadge">1</span>
                        </span>
                    </div>                     
                    <div className="topBarIcons">
                        <span className="topBarIconItems">
                            <NotificationsActiveIcon />
                            <span className="topBarIconBadge">1</span>
                        </span>
                    </div> 
                    <img src="/assets/person/1.jpg" alt="1" className="topBarImage" />
            </div>

        </div>
    );
}

export default Topbar;