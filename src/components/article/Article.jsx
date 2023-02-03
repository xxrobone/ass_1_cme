import React from 'react'
import './Article.scss'

export default function Article({ title, img, text, link, id}) {

  return (
      <article>
        <h2>{title}</h2>
        <div className="content">
        <p>{text}</p>
        <img src={img} alt={title} />
        <a className='homepage' href={link} target='_blank'>{link}</a>
      </div>     
    </article>
  )
}
