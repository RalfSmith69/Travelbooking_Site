import React, { useState, useEffect } from 'react';
import './home.css';
import video from '../../Assets/Video.mp4';
// Icons to import =================>
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { TbBrandTripadvisor } from "react-icons/tb";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Home = () => {
  const [sliderValue, setSliderValue] = useState(100.00);
  const [city, setCity] = useState("");

  const API_KEY = '30fd47fe685046de9d64b8012d7568f5'; // Ihr OpenCage API-Schlüssel

  const handleSliderChange = (value) => {
    setSliderValue(parseFloat(value).toFixed(2));
  };

  const handleLocationClick = async () => {
    try {
      const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${API_KEY}`);
      if (response.data.results.length > 0) {
        const country = response.data.results[0].components.country;
        setCity(`${city}, ${country}`);
      } else {
        alert("Stadt nicht gefunden");
      }
    } catch (error) {
      alert("Es gab einen Fehler bei der Suche nach der Stadt");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Unsere Pakete
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Suche Dein Ferienziel
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Suche Dein Reiseziel:</label>
            <div className="input flex">
              <input 
                type="text" 
                placeholder="Bitte Namen eingeben. . ." 
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <GrLocation className="icon" onClick={handleLocationClick} />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Wähle Datum:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Maximaler Preis:</label>
              <h3 key={`price-${sliderValue}`} className="total">
                {parseFloat(sliderValue).toLocaleString('de-DE', {
                  style: 'currency',
                  currency: 'EUR'
                })}
              </h3>
            </div>
            <div className="input flex">
              <input
                type="range"
                min="100"
                max="5000"
                value={sliderValue}
                step="1"
                onChange={(e) => handleSliderChange(e.target.value)}
              />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>SPEICHER FILTER</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <a href="https://www.facebook.com/groups/122992588439298/?hoisted_section_header_type=recently_seen&multi_permalinks=1698993314172543">
              <FiFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com/explorer.fernreisen/">
              <BsInstagram className="icon" />
            </a>
            <a href="https://www.tripadvisor.de/">
              <TbBrandTripadvisor className="icon" />
            </a>
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
