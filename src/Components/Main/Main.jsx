import React, {useEffect} from "react";
import "./main.css";
import img from "../../Assets/img (1).jpg";
import img2 from "../../Assets/img (2).jpg";
import img3 from "../../Assets/img (3).jpg";
import img4 from "../../Assets/img (4).jpg";
import img5 from "../../Assets/img (5).jpg";
import img6 from "../../Assets/img (6).jpg";
import img7 from "../../Assets/img (7).jpg";
import img8 from "../../Assets/img (8).jpg";
import img9 from "../../Assets/img (9).jpg";
//Icons to import================>
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "Französisch Polynesien",
    grade: 'FERNE ORTE ERLEBEN ',
    fees: "500€",
    description:
      "Bora Bora, der Inbegriff der Romantik, gehört zu den besten Reisezielen weltweit. Bekannt für luxuriöse Aufenthalte und abenteuerliche Aktivitäten, bietet es kristallklare Lagunen zum Tauchen und weiße Sandstrände zum Entspannen. Bora Bora garantiert ein unvergessliches Erlebnis und ist ideal für eine traumhafte Auszeit.",
  },
  
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'FERNE ORTE ERLEBEN ',
    fees: '600€',
    description: 'Machu Picchu, die verlorene Stadt der Inka, thront majestätisch in den Anden Perus. Entdecken Sie diese historische Stätte, umgeben von atemberaubender Natur und geheimnisvoller Vergangenheit. Ein Muss für jeden Reisenden, der sich von der faszinierenden Mystik und den Wundern dieses Ortes verzaubern lassen möchte.'
},


{
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australien',
  grade: 'FERNE ORTE ERLEBEN',
  fees: '700€',
  description: 'Das Great Barrier Reef, ein UNESCO-Weltnaturerbe, erstreckt sich entlang der australischen Küste. Entdecken Sie die farbenfrohe Unterwasserwelt und tauchen Sie ein in dieses Paradies aus Korallen und exotischen Meeresbewohnern. Hier wird das Tauchen zu einem unvergesslichen Erlebnis voller faszinierender Eindrücke.'
},

{
  id:4,
  imgSrc: img4,
  destTitle: 'Kappadokien"',
  location: 'Türkei',
  grade: 'FERNE ORTE ERLEBEN ',
  fees: '800€',
  description: 'Kappadokien, bekannt für seine atemberaubenden Felsformationen und Höhlenstädte, liegt im Herzen der Türkei. Entdecken Sie die faszinierende Landschaft bei einer Heißluftballonfahrt und erleben Sie die beeindruckende Geschichte dieser Region. Ein unvergessliches Abenteuer erwartet Sie in diesem einzigartigen Teil der Welt.'
},

{
  id:5,
  imgSrc: img5,
  destTitle: 'Guanajuato',
  location: 'Mexiko',
  grade: 'FERNE ORTE ERLEBEN ',
  fees: '1100€',
  description: 'Guanajuato, eine charmante Kolonialstadt in Mexiko, besticht durch ihre bunten Häuser und verwinkelten Gassen. Erkunden Sie die historischen Bergwerke, Gebäude, Menschen und lebhaften Märkte und genießen Sie die lebendige Kultur sowie die faszinierenden Traditionen dieser schönen, einzigartigen und historischen Region.'
},

{
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  location: 'Italien',
  grade: 'FERNE ORTE ERLEBEN',
  fees: '840€',
  description: 'Die Cinque Terre, fünf malerische Dörfer an der italienischen Riviera, bieten atemberaubende Küstenlandschaften und farbenfrohe Häuser. Wandern Sie entlang der beeindruckenden Klippenpfade, genießen Sie köstliche lokale Spezialitäten und erleben Sie das unverwechselbare mediterrane Flair dieser charmanten Region.'
},

{
  id:7,
  imgSrc: img7,
  destTitle: 'Angkor Wat',
  location: 'Kambodscha',
  grade: 'FERNE ORTE ERLEBEN ',
  fees: '840€',
  description: 'Angkor Wat, die größte religiöse Tempelanlage der Welt, liegt in Kambodscha und beeindruckt mit ihrer majestätischen Architektur und kunstvollen Reliefs. Erleben Sie den atemberaubenden Sonnenaufgang über den alten Türmen und tauchen Sie ein in die reiche Geschichte der Khmer-Kultur. Ein unvergessliches Erlebnis erwartet Sie. Das Sie nie vergessen.'
},

{
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  location: 'Indien',
  grade: 'FERNE ORTE ERLEBEN',
  fees: '900€',
  description: 'Der Taj Mahal, ein Meisterwerk der indischen Mughal-Architektur in Indien, steht als Symbol ewiger Liebe. Besuchen Sie dieses beeindruckende Marmormausoleum, umgeben von herrlichen Gärten und reflektierenden Wasserbecken. Erleben Sie die atemberaubende Schönheit und das romantische Flair, das diesen Ort zu einem unvergesslichen Erlebnis macht.'
},

{
  id:9,
  imgSrc: img9,
  destTitle: 'Bali',
  location: 'Indonesien',
  grade: 'FERNE ORTE ERLEBEN ',
  fees: '500€',
  description: 'Bali, die „Insel der Götter“ in Indonesien, verzaubert mit traumhaften Stränden, üppigen Reisterrassen und lebendiger Kultur. Entdecken Sie beeindruckende Tempel, genießen Sie köstliche lokale Küche und entspannen Sie in luxuriösen Resorts. Erleben Sie die einzigartige Mischung aus Tradition und Natur, die Bali zu einem unvergesslichen Reiseziel für Erholung macht.'
}, 
]; 

const Main = () => {

   // A react hook to add a scroll animation......

    useEffect(() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Meist besuchte Urlaubsziele</h3>
      </div>

      <div className="secContent grid">
        {/*Here are going to use high order array method (map).
  To do that I shall use a list of object in one array. I`m
  going to create an array named date and from that I shall 
  .map() array to fetch each destination at once.*/}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/*Here it will return single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
