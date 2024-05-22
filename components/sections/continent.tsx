"use client"

import Lottie from 'lottie-react'
import React from 'react'
import ContinentImage from '../../public/continent.json'

const Continent = () => {
  return (
    <div className='max-w-[900px]'>
        <Lottie loop={true} animationData={ContinentImage} />
    </div>
  )
}

export default Continent