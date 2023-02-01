import React from 'react'

// styles
import './NavItem.scss'

export default function NavItem({title, href, cls, id}) {
  return (
      <li className={cls} key={id}>
          <a className="nav_link" href={href}>{title}</a>
    </li>
  )
}
