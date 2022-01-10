import React, { useState, useEffect } from 'react';
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import './Sidebar.css';
import { Link } from "react-router-dom";
import {messages} from "../data";

const data = {
    "members": ["user1", "user2", "user3"],
    "channels": ["channel-1", "channel-2", "channel-3"]
}

const ClosedSidebar = ({handleClosedButtonClick}) => 
    <button className="closed-sidebar-btn" onClick = {handleClosedButtonClick}>
        <AiOutlineMenu />
    </button>




const OpenSidebar = ({handleOpenedButtonClick, isOpen}) =>
    <div className={"d-sidebar "+(isOpen?"open-sidebar":"closed-sidebar")}>
        <div className="d-sidebar-banner">
            <Link className="d-sidebar-link" to = "/">
            banner?
            </Link>
            
            <button className="opened-sidebar-btn" onClick = {handleOpenedButtonClick}>
                <AiOutlineClose />
            </button>
        </div>
        <Link className="d-sidebar-link" to="/home">
            <div className="d-sidebar-item d-sidebar-headingitem">
                Home
            </div>
        </Link>
        <Link className="d-sidebar-link" to="/channels">
            <div className="d-sidebar-item d-sidebar-headingitem">
                Channels
            </div>
        </Link>
        {
            data.channels.map((name, i) =>
                <Link className="d-sidebar-link" to={`/channels/${name}`} key={"sidebar-channel-"+i}>
                    <div className="d-sidebar-item d-sidebar-subitem">
                        #{name}
                    </div>
                </Link>
            )
        }
        <Link className="d-sidebar-link" to="/members">
            <div className="d-sidebar-item d-sidebar-headingitem">
                Members
            </div>
        </Link>
        {
            data.members.slice(0,5).map((name, i) =>
                <Link className="d-sidebar-link" to={`/members/${name}`} key={"sidebar-member-"+i}>
                    <div className="d-sidebar-item d-sidebar-subitem">
                        @{name}
                    </div>
                </Link>
            )
        }
    </div>



function Sidebar() {

    const [open, setOpen] = useState(false);

    const handleClosedButtonClick = (e) => {
        e.preventDefault();
        setOpen(true);
    }

    const handleOpenedButtonClick = (e) => {
        e.preventDefault();
        setOpen(false);
    };


    useEffect(
        ()=>{
            const authors = new Set(messages.messages.map(m=>
                m.author.name));
                data.members = Array.from(authors);
            console.log(authors);
        }, []);
            


    return (
        open?<OpenSidebar isOpen={open} handleOpenedButtonClick = {handleOpenedButtonClick} />:<ClosedSidebar handleClosedButtonClick={handleClosedButtonClick}/>
    );
}

export default Sidebar;
