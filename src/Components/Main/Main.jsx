import React, {useEffect} from 'react'
import './main.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'


import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'
import img6 from '../Assets/img6.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc: img1,
    desTitle: 'skyline',
    location: 'Mumbai',
    fees: '$25000',
    description: 'Mumbai (also known as Bombay, the official name until 1995) is the capital city of the Indian state of Maharashtra.'
  },

  {
    id:2,
    imgSrc: img2,
    desTitle: 'Bhagnagar',
    location: 'Hyderabad',
    fees: '$35000',
    description: 'Hyderabad is known as The City of Pearls, as once it was the only global centre for trade of large diamonds, emeralds and natural pearls. Many traditional and historical bazaars are located around the city.'
  },

  {
    id:3,
    imgSrc: img3,
    desTitle: 'Red Fort',
    location: 'Delhi',
    fees: '$40000',
    description: 'Delhi, city and national capital territory, north-central India. '
  },

  {
    id:4,
    imgSrc: img4,
    desTitle: 'Backwaters',
    location: 'Kerala',
    fees: '$22000',
    description: 'Kerala, southwestern coastal state of India.'
  },

  {
    id:5,
    imgSrc: img5,
    desTitle: 'Amber Fort',
    location: 'Jaipur',
    fees: '$50000',
    description: 'Jaipur formerly Jeypore, is the capital and largest city of the Indian state of Rajasthan.'
  },

  {
    id:6,
    imgSrc: img6,
    desTitle: 'Mysore Palace',
    location: 'Mysore',
    fees: '$35000',
    description: 'Mysore is the southernmost city of Karnataka.'
  },

]


const Main = () => {

  const Home = () => {

    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  }

  return (
    <section className='main container section'>

    <div className='secTitle'>
      <h3 data-aos="fade-right" 
      className='title'>
        Most visited destinations
        </h3>
    </div>

    <div className="secContent grid">

      {
        Data.map(({id,imgSrc,desTitle,location,fees,description})=> {
          return(
            <div key={id}
             data-aos="fade-up" 
             className='singleDestination'>

              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>

              <div className="cardInfo">
                <h4 className = "desTitle">{desTitle} </h4>
                <span className='content.flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                </span>

                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                <p>{description}</p>
              </div>

              <button className = "btn flex">Details 
              <HiOutlineClipboardCheck className='icon'/> </button>

            </div>
          )

        })
      }

    </div>

    </section>
  )
}


export default Main
