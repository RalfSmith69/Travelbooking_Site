import React from 'react'
import './footer.css'   
import video2 from '../../Assets/Video_2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";

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
            <input type="text" placeholder='E-Mail Adresse eingeben. . .' />
            <button className='btn flex' type='submit'>
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href=" # " className="logo flex">
              <MdOutlineTravelExplore className="icon"/> fern.
              </a>
            </div>

            <div className="footerParagraph">
              Reisen Sie mit ` fern. ´ in exotische Welten. Entdecken Sie faszinierende Kulturen, 
              atemberaubende Landschaften und einzigartige Abenteuer. Lassen Sie sich von unseren 
              Empfehlungen inspirieren und gestalten Sie Ihre unvergessliche Reise in die Ferne.
            </div>

            <div className="footerSocials">
            <AiOutlineTwitter className="icon"/>
            <AiFillYoutube className="icon"/>
            <AiFillInstagram className="icon"/>
            <FaTripadvisor className="icon"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
