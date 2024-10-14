import React from 'react';
import './App.css';

// Importing the images
import bellIcon from './assets/icons/Bell.png';
import menuIcon from './assets/icons/Menu.png';
import addIcon from './assets/icons/Add.png';
import inviteIcon from './assets/icons/Send_Invite.png';

function App() {
    return (
        <div className="app-container">
            <div className="sidebar">
                <h3>Friends</h3>
                <div className="checkbox-section">
                    <label>
                        <input type="checkbox" />
                        Friend #1
                    </label>
                    <label>
                        <input type="checkbox" />
                        Friend #2
                    </label>
                    <label>
                        <input type="checkbox" />
                        Friend #3
                    </label>
                </div>

                <h3>Groups</h3>
                <div className="checkbox-section">
                    <label>
                        <input type="checkbox" />
                        Group #1
                    </label>
                    <label>
                        <input type="checkbox" />
                        Group #2
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
