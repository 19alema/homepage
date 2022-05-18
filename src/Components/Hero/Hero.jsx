import React from 'react'
import "./Hero.scss"

import {Clientaudiophile,Clientmaker, Clientmeet, Heromobile, Herodesktop, Clientdatabiz} from "../../Constants/index"
function Hero() {

  return (
    <div className='Hero_section'>
      <div className="Hero_container">
        <div className="Hero_left">
          <h1 className='title'>
            Make remote work
          </h1>

          <p className='title_intro'>
           Get your team in async, no matter your location. Streamline processes, create team rituals, and watch productivity soar
          </p>

          <button className="Hero_btn">
            Learn more
          </button>

          <div className="Hero_clients">
            <div className="Hero_client-logo">
              <img src={Clientaudiophile} alt="client audiophile" />
            </div>
            <div className="Hero_client-logo">
              <img src={Clientdatabiz} alt="client databiz" />
             </div>
            <div className="Hero_client-logo">
              <img src={Clientmeet} alt="client meet" />
             </div>
            <div className="Hero_client-logo">
              <img src={Clientmaker} alt="client meet" />
             </div>
          </div>
        </div>
        <div className="Hero_right">
          <img src={Heromobile} alt="mobilehero" className='mobile' />
          <img src={Herodesktop } alt="desktopHero" className='desktop' />
        </div>
      </div>
    </div>
  )
}

export default Hero