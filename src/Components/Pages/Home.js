import React from 'react'
import '../Styles/Home.css'
import { Blocks } from './Blocks'

const arr = [
    "funny",
    "sad",
    "Romatic",
    "Vibes"
]

function Home() {
  return (
    <div className='Home'>
      <Blocks arr={arr}/>
    </div>
  )
}

export {Home}
