import React from 'react'

// styles
import './ImageBg.scss'

export default function ImageBg({img}) {
  return (
      <div className='img_wrapper'>
          <img src={img} alt="" />
    </div>
  )
}
