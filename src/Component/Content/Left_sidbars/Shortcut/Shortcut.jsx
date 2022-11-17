import React from 'react'
import './Shortcut.css'
import avatar from '../../../assets/avatar.jpg'

const Shortcut = () => {
  return (
    <div className="shortcurt">
      <div className="shortcurt_head">
        <h3>Your Shortcurt</h3>
      </div>
      <ul className="shortcurt_links">
        <li>
          <a href="">
            <img src={avatar} alt="" />
            <small>Web developers </small>
          </a>
        </li>
        <li>
          <a href="">
            <img src={avatar} alt="" />
            <small>Web design course</small>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Shortcut
