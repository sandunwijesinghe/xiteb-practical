import React, { useState } from "react";
import './menubar.css'
const Menubar = () => {
  const [aboutActive, setAboutActive] = useState(false);
  const [roomsActive, setRoomsActive] = useState(false);
  const [diningActive, setDiningActive] = useState(false);
  const [experienceActive, setExperienceActive] = useState(false);
  const [eventsActive, setEventsActive] = useState(false);
  const [moreActive, setMoreActive] = useState(false);

  const toggleAboutActive = () => setAboutActive(!aboutActive);
  const toggleRoomsActive = () => setRoomsActive(!roomsActive);
  const toggleDiningActive = () => setDiningActive(!diningActive);
  const toggleExperienceActive = () => setExperienceActive(!experienceActive);
  const toggleEventsActive = () => setEventsActive(!eventsActive);
  const toggleMoreActive = () => setMoreActive(!moreActive);

  const dropdownItems = ["Item 1", "Item 2", "Item 3"];
  const navItems = [
    {
      id: 1,
      title: "ABOUT",
      activeState: aboutActive,
      toggleActiveState: toggleAboutActive,
    },
    {
      id: 2,
      title: "ROOMS & SUITS",
      activeState: roomsActive,
      toggleActiveState: toggleRoomsActive,
    },
    {
      id: 3,
      title: "DINING",
      activeState: diningActive,
      toggleActiveState: toggleDiningActive,
    },
    {
      id: 4,
      title: "EXPERIENCE",
      activeState: experienceActive,
      toggleActiveState: toggleExperienceActive,
    },
    {
      id: 5,
      title: "EVENTS",
      activeState: eventsActive,
      toggleActiveState: toggleEventsActive,
    },
    {
      id: 6,
      title: "GALLERY",
      activeState: null,
      toggleActiveState: null,
    },
    {
      id: 7,
      title: "OFFERS",
      activeState: null,
      toggleActiveState: null,
    },
    {
      id: 8,
      title: "MORE",
      activeState: moreActive,
      toggleActiveState: toggleMoreActive,
    },
  ];

  return (
    <div className="nav-wrapper">
      {" "}
      <nav >
        <div className="nav-items">
        <ul className="nav-list" >
          {navItems.map(({ id, title, activeState, toggleActiveState }) => (
            <li className="nav-list-items" id={id}>
              <button
               className="nav-list-link"
                onMouseEnter={toggleActiveState}
                onMouseLeave={toggleActiveState}
              >
                {title}
              </button>
              {activeState && (
                <ul className="dropdown-list">
                  {dropdownItems.map((item, index) => (
                    <li className="dropdown-list-items" key={index}>
                      <a href="/" style={{ color: "black" }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
            <button className="nav-btn">FIND A HOTEL</button>
        </ul>
      
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
