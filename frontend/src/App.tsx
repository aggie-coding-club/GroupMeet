import React from 'react';
import './App.css';
import Icon from '@mdi/react';

// Importing the images
import profilePlaceholder from './Empty_Profile.png';
import logo from './GroupMeet.webp';

import { mdiPlusBoxOutline } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import { mdiMenu } from '@mdi/js';

function App() {
    return (
        <div className="app-container">

            <div className="sidebar">
                <img className="logo" src={logo} alt="Logo" />
                <h3 className="friend-header">Friends</h3>

                <div className="friend-list">

                    <label className="friend-item">
                        <img src={profilePlaceholder} alt="Friend #1" className="friend-avatar" />
                        <span>Friend #1</span>
                        <input type="checkbox" />
                    </label>
                    <label className="friend-item">
                        <img src={profilePlaceholder} alt="Friend #2" className="friend-avatar" />
                        <span>Friend #2</span>
                        <input type="checkbox" />
                    </label>
                    <label className="friend-item">
                        <img src={profilePlaceholder} alt="Friend #3" className="friend-avatar" />
                        <span>Friend #3</span>
                        <input type="checkbox" />
                    </label>

                </div>

                <h3 className='group-header'>Groups</h3>
                <div className="group-list">
                    <label className="group-item">
                        <img src={profilePlaceholder} alt="Group #1" className="group-avatar" />
                        <span>Group #1</span>
                        <input type="checkbox" />
                    </label>
                    <label className="group-item">
                        <img src={profilePlaceholder} alt="Group #2" className="group-avatar" />
                        <span>Group #2</span>
                        <input type="checkbox" />
                    </label>
                    <label className="group-item">
                        <img src={profilePlaceholder} alt="Group #3" className="group-avatar" />
                        <span>Group #3</span>
                        <input type="checkbox" />
                    </label>
                </div>
            </div>

            <div className="content">
                <div className="top-buttons">
                    <button className='add-button'>
                        <Icon className="add-icon" path={mdiPlusBoxOutline} />
                    </button>
                    <button className='bell-button'>
                        <Icon className="bell-icon" path={mdiBellOutline} />
                    </button>
                    <button className="invite-button">Send Invite</button>
                    <button className='menu-button'>
                        <Icon className="menu-icon" path={mdiMenu} />
                    </button>
                </div>
                <div className="calendar">
                    <p>Calendar Goes Here</p>
                </div>
            </div>
        </div>

    );
}

export default App;
