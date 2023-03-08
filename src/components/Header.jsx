import React from "react";
import "./header.css";
import Menubar from "./Menubar";
function Header() {
  const navItems = [
    { id: 1, title: "Sign In" },
    { id: 2, title: "Join Now" },
    { id: 3, title: "Find Reservatons" },
    { id: 4, title: "English" },
    { id: 5, title: "LKR" },
  ];

  return (

    
    <div className="header">

        {/* upper navbar */}
      <div className="navbar">
        <div className="navContainer">
         <div className="logo-container">
           <span>
            <img
              className="logo"
              src="https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png"
              alt=""
            />
          </span>
         </div>
          <div className="navItem">
            {navItems.map(({ id, title }) => (
              <button className="navButton" id={id}>
                {title}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* lower navbar */}
      <div className="menubar">
       <Menubar/>
      </div>
    </div>
  );
}

export default Header;
