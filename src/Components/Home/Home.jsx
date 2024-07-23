import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/Video.mp4' 
//Icons to import =================>
import {GrLocation} from "react-icons/gr"
import { HiFilter } from "react-icons/hi"
import { FiFacebook } from "react-icons/fi"
import { BsInstagram } from "react-icons/bs"
import { TbBrandTripadvisor } from "react-icons/tb"
import { BsListTask } from "react-icons/bs"
import { TbApps } from "react-icons/tb"

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
// A react hook to add a scroll animation......

useEffect(() => {
    Aos.init({duration: 2000})
}, [])

  
  return (
    <section className="home">
       <div className="overlay"></div>
       <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className= "homeContent container">
        <div className="textDiv">
          
          <span data-aos="fade-up" className ="smallText">
            Unsere Pakete
          </span>
          
          <h1 data-aos="fade-up" className ="homeTitle">
            Suche Dein Ferienziel
          </h1>
        
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
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

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
          <a href="https://www.facebook.com/groups/122992588439298/?hoisted_section_header_type=recently_seen&multi_permalinks=1698993314172543"><FiFacebook className="icon"/></a>
          <a href='https://www.instagram.com/explorer.fernreisen/'><BsInstagram className="icon"/></a>
          <a href='https://www.tripadvisor.de/'><TbBrandTripadvisor className="icon" /></a>
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
