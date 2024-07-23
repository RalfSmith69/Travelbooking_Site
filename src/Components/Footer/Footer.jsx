import React from 'react'
import './footer.css'   
import video2 from '../../Assets/Video_2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Bleibe in Kontakt</small>
            <h2>Reise mit uns</h2>
          </div>

          <div className="inputDiv flex">
            <input type="email" placeholder='E-Mail Adresse eingeben. . .' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="https://www.falk.de/weltkarte?mz=4&mp=55.13369_16.638" className="logo flex">
              <MdOutlineTravelExplore className="icon"/> fern.
              </a>
            </div>

            <div className="footerParagraph">
              Reisen Sie mit ` fern. ´ in exotische Welten. Entdecken Sie faszinierende Kulturen, 
              atemberaubende Landschaften und einzigartige Abenteuer. Lassen Sie sich von unseren 
              Empfehlungen inspirieren und gestalten Sie Ihre unvergessliche Reise in die Ferne.
            </div>

            <div className="footerSocials flex">
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            </div>
          </div>

          <div className="footerLinks grid">
              
              {/* Group One */}
              <div className="linkGroup">
                <span className="groupTitle">
                  UNSERE AGENTUR
                </span>

                 <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Service
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Versicherung
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Agentur
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Tourismus
                 </li>
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Zahlung
                 </li>

              </div> 

               {/* Group Two */}
               <div className="linkGroup">
                <span className="groupTitle">
                  PARTNER
                </span>

                 <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings.com
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Autovermietung
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   HostelWorld
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Trivago
                 </li>
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   TripAdvisor
                 </li>

              </div> 

               {/* Group Three */}
               <div className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                 <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Californien
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Indonesien
                 </li>
                
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Europa
                 </li>
                 <li className="footerList flex">
                   <FiChevronRight className="icon" />
                   Ozeanien
                 </li>

              </div> 
          </div>

          <div className="footerDiv flex">
              {/* <small>BESTE REISE WEBSEITEN THEMEN</small> */}
              <small> COPYRIGHTS RESERVED by Smith69-WebDeVTEC 2024</small>
          </div> 

        </div>
      </div>

    </section>
  )
}

export default Footer
