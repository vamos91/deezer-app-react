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
            <NavLink
            active
            href="#"
            >
            Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
            Another Link
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            disabled
            href="#"
            >
            Disabled Link
            </NavLink>
        </NavItem>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Playlist ({playlist.length})</DropdownToggle>
            <DropdownMenu>
                <button onClick={() => deleteAll()}>Delete All</button>
                {
                    playlist.map((track, i) => (
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