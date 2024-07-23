import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/Video.mp4' 
//Icons to import =================>
import {GrLocation} from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
// Create a react hook to add a scroll animation......


  
  return (
    <section className="home">
       <div className="overlay"></div>
       <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className= "homeContent container">
        <div className="textDiv">
          
          <span className ="smallText">
            Unsere Pakete
          </span>
          
          <h1 className ="homeTitle">
            Suche Dein Ferienziel
          </h1>
        
        </div>

        <div className="cardDiv grid">
        <div className="destinationInput">
              <label htmlFor="city">Suche Dein Reiseziel:</label>
              <div className="input flex">
                <input type="text" placeholder="Bitte Namen eingeben. . ."/>
                <GrLocation className="icon"/>
              </div>
            </div>
            
            <div className="dateInput">
              <label htmlFor="date">Wähle Datum:</label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>
            
            <div className="priceInput">
              <div className="label_total flex">
               <label htmlFor="price">Maximaler Preis:</label>
               <h3 className="total">5000.- €</h3> 
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>

            <div className="searchOptions flex">
            <HiFilter className="icon"/>
            <span>MEHR FILTER</span>
            </div>
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
          <FiFacebook className="icon"/>
          <BsInstagram className="icon"/>
          <TbBrandTripadvisor className="icon" />
          </div>
          
          <div className="leftIcons">
          <BsListTask className="icon"/>
          <TbApps className="icon"/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home
