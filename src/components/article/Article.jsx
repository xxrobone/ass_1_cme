import React from 'react'

import './Article.scss'

export default function Article({ title, img, text, link }) {

  return (
      <article>
        <h2>{title}</h2>
        <div className="content">
        <p>{text}</p>
        <img src={img} alt={title} />
      
      </div>
      <a href={link} target='_blank'>{link}</a>
    </article>
  )
}
