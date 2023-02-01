import React from 'react'

// styles
import './Nav.scss'

export default function Nav(props) {
  return (
      <nav className='nav'>
          <ul className='menu'>
          {props.children}              
          </ul>
    </nav>
  )
}
