import React from 'react';
import './App.css';

// Importing the images
import bellIcon from './assets/icons/Bell.png';
import menuIcon from './assets/icons/Menu.png';
import addIcon from './assets/icons/Add.png';
import inviteIcon from './assets/icons/Send_Invite.png';
import profilePlaceholder from './assets/icons/Empty_Profile.png';

function App() {
    return (
        <div className="app-container">
            <div className="sidebar">
            <h3>Friends</h3>
        <div className="friends-list">
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

                <h3>Groups</h3>
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
                    <button className="add-button">
                        <img src={addIcon} alt="Add" />
                    </button>
                    <button className="bell-button">
                        <img src={bellIcon} alt="Notifications" />
                    </button>
                    <button className="invite-button">
                        <img src={inviteIcon} alt="Invite" />
                    </button>
                    <button className="menu-button">
                        <img src={menuIcon} alt="Menu" />
                    </button>
                </div>

                {/* Placeholder for the calendar component */}
                <div className="calendar">
                    <p>Your calendar will go here</p>
                </div>
            </div>
        </div>
    );
}

export default App;
