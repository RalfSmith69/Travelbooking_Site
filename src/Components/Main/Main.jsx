import React from 'react'
import './main.css'
import img from '../../Assets/img (1).jpeg'
//Icons to import
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'Französich Polynesien',
    grade: 'Kulturelles entspannen',
    fees: '500.-€',
    description: 'Bora Bora, der Inbegriff der Romantik, ist eines der besten Reiseziele der Welt. Dieser Ort ist bekannt für seine luxuriösen Aufenthalte und abenteuerlichen Aktivitäten.'
  },
  /*
  {
    id:2,
    imgSrc: img,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'Kulturelles entspannen',
    fees: '600.-€',
    description: 'Machu Picchu, die verlorene Stadt der Inka, thront majestätisch in den Anden Perus. Entdecken Sie diese historische Stätte, umgeben von atemberaubender Natur und mysteriöser Vergangenheit, ein Muss für jeden Reisenden.'
},

{
  id:3,
  imgSrc: img,
  destTitle: 'Great Barrier Reef',
  location: 'Australien',
  grade: 'Kulturelles entspannen',
  fees: '700.-€',
  description: 'Das Great Barrier Reef, ein UNESCO-Weltnaturerbe, erstreckt sich entlang der australischen Küste. Entdecken Sie die farbenfrohe Unterwasserwelt, tauchen Sie ein in dieses Paradies aus Korallen und exotischen Meeresbewohnern.'
},

{
  id:4,
  imgSrc: img,
  destTitle: 'Kappdokien',
  location: 'Türkei',
  grade: 'Kulturelles entspannen',
  fees: '800.-€',
  description: 'Kappadokien, bekannt für seine atemberaubenden Felsformationen und Höhlenstädte, liegt im Herzen der Türkei. Entdecken Sie die faszinierende Landschaft bei einer Heißluftballonfahrt und erleben Sie die einzigartige Geschichte dieser Region.'
},

{
  id:5,
  imgSrc: img,
  destTitle: 'Guanajuato',
  location: 'Mexiko',
  grade: 'Kulturelles entspannen',
  fees: '1100.-€',
  description: 'Guanajuato, eine charmante Kolonialstadt in Mexiko, besticht durch ihre bunten Häuser und verwinkelten Gassen. Erkunden Sie die historischen Bergwerke, lebhaften Märkte und genießen Sie die lebendige Kultur und Traditionen dieser Region.'
},

{
  id:6,
  imgSrc: img,
  destTitle: 'Cinque Terre',
  location: 'Italien',
  grade: 'Kulturelles entspannen',
  fees: '840.-€',
  description: 'Die Cinque Terre, fünf malerische Dörfer an der italienischen Riviera, bieten atemberaubende Küstenlandschaften und farbenfrohe Häuser. Wandern Sie entlang der Klippenpfade, genießen Sie lokale Köstlichkeiten und das mediterrane Flair.'
},

{
  id:7,
  imgSrc: img,
  destTitle: 'Angkor Wat',
  location: 'Kambodscha',
  grade: 'Kulturelles entspannen',
  fees: '840.-€',
  description: 'Angkor Wat, die größte religiöse Tempelanlage der Welt, liegt in Kambodscha und beeindruckt mit ihrer majestätischen Architektur und kunstvollen Reliefs. Erleben Sie den Sonnenaufgang über den alten Türmen und tauchen Sie ein in die Geschichte der Khmer-Kultur.'
},

{
  id:8,
  imgSrc: img,
  destTitle: 'Taj Mahal',
  location: 'Indien',
  grade: 'Kulturelles entspannen',
  fees: '900.-€',
  description: 'Der Taj Mahal, ein Meisterwerk der Mughal-Architektur in Indien, steht als Symbol ewiger Liebe. Besuchen Sie dieses beeindruckende Marmormausoleum, umgeben von herrlichen Gärten und reflektierenden Wasserbecken, ein unvergessliches Erlebnis.'
}

{
  id:9,
  imgSrc: img,
  destTitle: 'Bali',
  location: 'Indonesien',
  grade: 'Kulturelles entspannen',
  fees: '500.-€',
  description: 'Der Taj Mahal, ein Meisterwerk der Mughal-Architektur in Indien, steht als Symbol ewiger Liebe. Besuchen Sie dieses beeindruckende Marmormausoleum, umgeben von herrlichen Gärten und reflektierenden Wasserbecken, ein unvergessliches Erlebnis.'
}*/

]


const Main = () => {
  return (
  <section className="main container section">
    <div className="secTitle">
      <h3 className="title">
        Meist besuchte Urlaubziele
      </h3>
    </div>

    <div className="secContent grid">
    {/*Here are going to use high order array method (map).
  To do that I shall use a list of object in one array. I`m
  going to create an array named date and from that I shall 
  .map() array to fetch each destination at once.*/}

  {
    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
      return(
          <div key={id} className="singleDestination">
             {/*Here it will return single id from the map array */}

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>

            <div className="cardInfo">
              <h4 className="destTitle">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon"/>
                <span className="name">{location}</span>
              </span>

              <div className="fees flex">
                <div className="grade">
                  <span>{grade}<small>+1</small></span>
                </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
              </div>

             <div className="desc">
                <p>{description}</p>
             </div>

              <button className='btn flex'>
                DETAILS <HiOutlineClipboardCheck className="icon"/>
              </button>
            </div>
          </div>
      )
    })

  }
  

    </div> 

   </section>
  )
}

export default Main
