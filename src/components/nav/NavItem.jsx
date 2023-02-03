import React from 'react'
import { Link } from 'react-router-dom'

// styles
import './NavItem.scss'

export default function NavItem({title, path, cls, id}) {
  return (
      <li className={cls} key={id}>
          <Link className="nav_link" to={path}>{title}</Link>
    </li>
  )
}
