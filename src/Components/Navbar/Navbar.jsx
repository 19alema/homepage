import React, {
  useState
} from 'react'
import "./Navbar.scss"
import {
  ReactComponent as Logo
} from '../../Assets/images/logo.svg'



import {
  FaAngleDown,
  FaAngleUp,
  FaTimes,
  FaBars
} from "react-icons/fa";

import {
  BsFillCalendarCheckFill
} from "react-icons/bs";
import {
  GrPlan
} from "react-icons/gr"

import {
  FcTodoList
} from "react-icons/fc";
import {
  IoMdNotifications
} from "react-icons/io"

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [dropdown, setDropdown] = useState(false)

  const toggleLinks = () => {
    if (arrow || dropdown) {
      setArrow(false);

    } else {
      setArrow(true);

    }
  }

  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }

  const toggleDropdown = () => {
    if (dropdown) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }
  return (<div className='Navbar'>
    <div className="Navbar_container" >
      <div className="desktopNav_logo" style={styles}>
        <img src={
          Logo
        }
          alt="logo_icon" />

        <div className="Navbar_toggle" >
          <FaBars style={{ cursor: "pointer" }} onClick={
            () => setNavbar(true)
          }
          />
        </div>

        { /* desktop */}

        <div className="navlinks desktopNav">
          <nav>
            <ul>
              <li className="links">
                <div className="link"
                  style={
                    {
                      display: "flex",
                      alignItems: "center"
                    }
                  }>
                  <p style={
                    {
                      marginRight: "5px",
                      cursor: "pointer"
                    }
                  }
                    onClick={
                      toggleLinks
                    }> Feature </p>
                  {arrow ? <FaAngleUp /> : < FaAngleDown />}
                </div>

                {arrow && (<div className="subLinks">
                  <div className="subLink">
                    <FcTodoList />
                    <p> Todo List </p>
                  </div>
                  <div className="subLink">
                    <BsFillCalendarCheckFill />
                    <p> Calender </p>
                  </div>
                  <div className="subLink" >
                    <IoMdNotifications />
                    <p> Reminder </p> </div>
                  <div className="subLink">
                    <GrPlan />
                    <p> Planning </p>
                  </div>
                </div>
                )
                } </li>


              <li className="links" >
                <div className="link"
                  style={
                    {
                      display: "flex",
                      alignItems: "center"
                    }
                  } >
                  <p style={
                    {
                      marginRight: "5px",
                      cursor: "pointer"
                    }
                  }
                    onClick={
                      toggleDropdown
                    }> Company </p> {
                    dropdown ? < FaAngleUp /> : < FaAngleDown />
                  } </div>

                {
                  dropdown && (< div className="subLinks" >
                    <div className="subLink" >
                      <p> History </p>
                    </div>
                    <div className="subLink">
                      <p> Our Team </p>
                    </div>
                    <div className="subLink">
                      <p> Blog </p>
                    </div>
                  </div>
                  )
                } </li>

              <li className="links" >
                <div className="link" style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "5px", cursor: "pointer" }}> Career </p>
                </div >
              </li>

              <li className="links">
                <div className="link" style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "5px", cursor: "pointer" }}> About </p>
                </div>
              </li>

    
            </ul>
          </nav>

        </div>

      </div>
    
      {/* MOBILE NAVBAR */}
   <div className="Navbar_container">
        {navbar && (<div className="navlinks mobileNav" >
          <FaTimes style={{ position: "fixed", right: "20px", top: "2em", cursor: "pointer" }} onClick={() => setNavbar(false)} />
          <nav>
            <ul>
              <li className="links">
                <div className="link" style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "5px", cursor: "pointer" }} onClick={toggleLinks}> Feature </p>
                  {arrow ? <FaAngleUp /> : <FaAngleDown />}
                </div>

                {arrow && (<div className="subLinks">
                  <div className="subLink">
                    <FcTodoList />
                    <p> Todo List </p>
                  </div>
                  <div className="subLink">
                    <BsFillCalendarCheckFill />
                    <p> Calender </p>
                  </div>
                  <div className="subLink" >
                    <IoMdNotifications />
                    <p> Reminder </p> </div>
                  <div className="subLink">
                    <GrPlan />
                    <p> Planning </p>
                  </div>
                </div>
                )
                } </li>


              <li className="links" >
                <div className="link"
                  style={
                    {
                      display: "flex",
                      alignItems: "center"
                    }
                  } >
                  <p style={{ marginRight: "5px", cursor: "pointer" }}
                    onClick={toggleDropdown}> Company </p> {
                    dropdown ? <FaAngleUp /> : <FaAngleDown />
                  } </div>

                {
                  dropdown && (< div className="subLinks" >
                    <div className="subLink" >
                      <p> History </p>
                    </div>
                    <div className="subLink">
                      <p> Our Team </p>
                    </div>
                    <div className="subLink">
                      <p> Blog </p>
                    </div>
                  </div>
                  )
                } </li>

              <li className="links" >
                <div className="link" style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "5px", cursor: "pointer" }}> Career </p>
                </div >
              </li>

              <li className="links">
                <div className="link"
                  style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "5px", cursor: "pointer" }}> About </p>
                </div>
              </li>
              <div className="navbar_login" >
                <button> Login </button>
                <button> Register </button>
              </div>
            
            </ul>
          </nav>
        </div>
          
        )}</div>
    </div>
  </div>
  )
}
export default Navbar;