import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FaTrashAlt } from "react-icons/fa";
import {Link} from 'react-router-dom'


function NavBar({playlist, removeTrackFromNavBar, removeAllTrackFromNavBar}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
    
    const removeTrack = (myTrack) => {
        removeTrackFromNavBar(myTrack)
    }

    const deleteAll = () => {
        removeAllTrackFromNavBar()
    }

  return (
    <div>
      <Nav style={{height: '10vh', backgroundColor: 'green'}}>
        <NavItem>
            <NavLink>
              <Link to="/">Home</Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
              <Link to="/music">Music</Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink>
              <Link to="/contact">Contact</Link>
            </NavLink>
        </NavItem>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Playlist ({playlist ? playlist.length : '0'})</DropdownToggle>
            <DropdownMenu>
                <button onClick={() => deleteAll()}>Delete All</button>
                {
                    playlist && playlist.map((track, i) => (
                    <div key={i} style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                        <DropdownItem>{track}</DropdownItem>
                        <FaTrashAlt onClick={() => removeTrack(track)}/>
                    </div>
                    ))
                }
            </DropdownMenu>
        </Dropdown>
        </Nav>
    </div>
  );
}

export default NavBar;