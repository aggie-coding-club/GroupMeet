import React from 'react'
import Icon from '@mdi/react';

// Importing the images
import profilePlaceholder from './Empty_Profile.png';
import logo from './GroupMeet.webp';

import { mdiPlusBoxOutline } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import { mdiMenu } from '@mdi/js';

function Dashboard() {
    return (

        <div className="dashboard font-semibold h-[98vh]">
            <style>
                @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
            </style>
            <div className="hidden sm:block overflow-y-scroll w-[250px] bg-[#fdfdfd] text-left text-[18px]">
                <img className="h-[20vmin] m-auto" src={logo} alt="Logo" />
                <h3 className="ml-[1vw] text-[#13ace2]">Friends</h3>

                <div className="mr-[0.5vw] ml-[0.5vw] text-[18px]">

                    <label className="friend-item flex items-center mb-[10px] border-b-2 border-[#d3d3d3] justify-between h-[40px] p-[10px] bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-[#12ACE2] hover:to-[#1DC365]">
                        <img src={profilePlaceholder} alt="Friend #1" className="w-[36px] h-[36px] rounded-full mr-[10px] bg-[#d9d9d9]" />
                        <span className="text-[18px] text-[#787878] text-center hover:text-white">Friend #1</span>
                        <input type="checkbox" />
                    </label>
                    <label className="friend-item flex items-center mb-[10px] border-b-2 border-[#d3d3d3] justify-between h-[40px] p-[10px] bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-[#12ACE2] hover:to-[#1DC365]">
                        <img src={profilePlaceholder} alt="Friend #2" className="w-[36px] h-[36px] rounded-full mr-[10px] bg-[#d9d9d9]" />
                        <span className="text-[18px] text-[#787878] text-center hover:text-white">Friend #2</span>
                        <input type="checkbox" />
                    </label>
                    <label className="friend-item flex items-center mb-[10px] border-b-2 border-[#d3d3d3] justify-between h-[40px] p-[10px] bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-[#12ACE2] hover:to-[#1DC365]">
                        <img src={profilePlaceholder} alt="Friend #3" className="w-[36px] h-[36px] rounded-full mr-[10px] bg-[#d9d9d9]" />
                        <span className="text-[18px] text-[#787878] text-center hover:text-white">Friend #3</span>
                        <input type="checkbox" />
                    </label>

                </div>

                <h3 className='group-header ml-[1vw] text-[#03c15e] relative h-auto'>Groups</h3>
                <div className="mr-[0.5vw] ml-[0.5vw]">
                    <label className="group-item flex items-center mb-[10px] border-b-2 border-[#d3d3d3] justify-between h-[40px] p-[10px] bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-[#12ACE2] hover:to-[#1DC365]">
                        <img src={profilePlaceholder} alt="Group #1" className="w-[36px] h-[36px] rounded-full mr-[10px] bg-[#d9d9d9]" />
                        <span className="text-[18px] text-[#787878] text-center hover:text-white">Group #1</span>
                        <input type="checkbox" />
                    </label>
                    <label className="group-item flex items-center mb-[10px] border-b-2 border-[#d3d3d3] justify-between h-[40px] p-[10px] bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-[#12ACE2] hover:to-[#1DC365]">
                        <img src={profilePlaceholder} alt="Group #2" className="w-[36px] h-[36px] rounded-full mr-[10px] bg-[#d9d9d9]" />
                        <span className="text-[18px] text-[#787878] text-center hover:text-white">Group #2</span>
                        <input type="checkbox" />
                    </label>
                    <label className="group-item flex items-center mb-[10px] border-b-2 border-[#d3d3d3] justify-between h-[40px] p-[10px] bg-[#f7f7f7] hover:bg-gradient-to-r hover:from-[#12ACE2] hover:to-[#1DC365]">
                        <img src={profilePlaceholder} alt="Group #3" className="w-[36px] h-[36px] rounded-full mr-[10px] bg-[#d9d9d9]" />
                        <span className="text-[18px] text-[#787878] text-center hover:text-white">Group #3</span>
                        <input type="checkbox" />
                    </label>
                </div>
            </div>

            <div className="flex-grow flex flex-col p-[10px] relative">
                <div className="flex mb-[20px] justify-end">
                    <img className="block flex sm:hidden w-[20vmin] m-auto" src={logo} alt="Logo" />
                    <div className='hidden sm:block'>
                        <button className='bg-transparent border-none cursor-pointer w-[22px] h-[22px] text-[#31b8e6] mr-4'>
                            <Icon className="bg-transparent border-transparent w-[32px] h-[32px] p-0" path={mdiPlusBoxOutline} />
                        </button>
                        <button className='bg-transparent border-none cursor-pointer w-[22px] h-[22px] text-[#31b8e6] mr-4'>
                            <Icon className="bg-transparent border-transparent w-[32px] h-[32px] p-0" path={mdiBellOutline} />
                        </button>
                        <button className="text-[85%] font-bold text-center text-white bg-gradient-to-r from-[#12ACE2] to-[#1DC365] border-0 mr-4 cursor-pointer rounded-[8px] w-[90px] h-[28px] transition duration-300">Send Invite</button>
                        <button className='bg-transparent border-none cursor-pointer w-[22px] h-[22px] text-[#31b8e6] mr-4'>
                            <Icon className="bg-transparent border-transparent w-[32px] h-[32px] p-0" path={mdiMenu} />
                        </button>
                    </div>
                </div>

                <div className="block sm:hidden flex justify-end my-auto">
                    <button className='font-bold text-center text-white bg-gradient-to-r from-[#12ACE2] to-[#1DC365] text-[18px] text-white rounded-[8px] pl-26px mr-4 w-[40vmin] h-[28px] mb-2 transition duration-300'>Friends & Groups</button>
                    <button className='bg-transparent border-none cursor-pointer w-[22px] h-[22px] text-[#31b8e6] mr-4 mb-2'>
                        <Icon className="bg-transparent border-transparent w-[32px] h-[32px]" path={mdiMenu} />
                    </button>
                </div>

                <div className="calendar">
                    <p>Calendar Goes Here</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard