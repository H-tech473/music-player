import '../Styles/Top.css'
import imag from '../Accessories/img/Podcasifylogo.png'
import React from "react";


function Top() {
  return (
    <div className='top'>
      <div className='logoSection'>
        <img src={imag} alt='' /><span>Podcasify</span>
      </div>
      <ul className='unordered-list'>
        <li>
          Signup / login
        </li>
      </ul>
    </div>
  )
}

export {Top}
