import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>A world of possibilities</h1>
        <p>This webpage is dedicated to explore tecnologies, life and me!</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
