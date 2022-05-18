import React, {
  useState
} from 'react'
import "./Navbar.scss"

import { logo,Iconreminder,IconArrowdown,Iconclosemenu,Icontodo,Iconplanning,Iconcalender ,Iconmenu,IconArrowup} from '../../Constants';


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
          logo
        }
          alt="logo_icon" />

        <div className="Navbar_toggle" >
          <img src={Iconmenu} style={{ cursor: "pointer" }} onClick={
            () => setNavbar(true)
          }
          alt="Hambargur_menu"/>
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
                  {arrow ? <img src={IconArrowup} alt={IconArrowup} /> : <img src={IconArrowdown} alt={IconArrowup} />}
                </div>

                {arrow && (<div className="subLinks">
                  <div className="subLink">
                    <img src={Icontodo} alt="todo_icon" />
                    <p> Todo List </p>
                  </div>
                  <div className="subLink">
                    <img src={Iconcalender}  alt="Calender"/>
                    <p> Calender </p>
                  </div>
                  <div className="subLink">
                    <img src={Iconreminder} alt="Reminder" />
                    <p> Reminder </p> </div>
                  <div className="subLink">
                   <img src={Iconplanning} alt="iconpalnning" />
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
                    dropdown ? <img src={IconArrowup} alt={IconArrowup} /> : <img src={IconArrowdown} alt={IconArrowdown} />
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
          <img src={Iconclosemenu} alt="close icon" style={{ position: "fixed", right: "20px", top: "2em", cursor: "pointer" }} onClick={() => setNavbar(false)} />
          <nav>
            <ul>
              <li className="links">
                <div className="link" style={{ display: "flex", alignItems: "center" }}>
                  <p style={{ marginRight: "5px", cursor: "pointer" }} onClick={toggleLinks}> Feature </p>
                  {arrow ? <img src={IconArrowup} alt={IconArrowup} /> : <img src={IconArrowdown} alt={IconArrowdown} />}
                </div>

                {arrow && (<div className="subLinks">
                  <div className="subLink">
                    <img src={Icontodo} alt="todo" />
                    <p> Todo List </p>
                  </div>
                  <div className="subLink">
                    <img src={Iconcalender} alt="Calender"/>
                    <p> Calender </p>
                  </div>
                  <div className="subLink">
                    <img src={Iconreminder } alt="Icon reminder"/>
                    <p> Reminder </p> </div>
                  <div className="subLink">
                    <img src={Iconplanning}  alt="planning icon"/>
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
                    dropdown ? <img src={IconArrowup} alt="angle up" /> : <img src={IconArrowdown} alt="Icon arrow down" />
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