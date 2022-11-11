import React from 'react'
import './L_sidbar.css'
import avatar3 from '../../../assets/avatar3.png'
import { AiOutlineHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiSettings } from 'react-icons/fi'
import { BsBookmarks, BsGraphUp } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'
import { child_notfication } from '../../../assets/Data/dummy'

const L_sidbar = () => {
  return (
    <div className="sidbar">
      <div className="sidbar_head">
        <div className="head_img">
          <img src={avatar3} alt="" />
        </div>
        <div className="head_title">
          <h3>Mohammed ali</h3>
          <small>@mohm</small>
        </div>
      </div>
      <ul className="sidbar_links">
        <li>
          <NavLink to="">
            <AiOutlineHome className="l_icon" />
            <h4>Home</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <MdOutlineExplore className="l_icon" />
            <h4>Explore</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <IoIosNotificationsOutline className="l_icon" />
            <span>99+</span>
            <h4>Notfication</h4>
          </NavLink>{' '}
          <div className="child_notfication">
            {child_notfication.map((item, i) => (
              <article key={i}>
                <div className="image">
                  <img src={item.not_img} alt="" />
                </div>
                <div className="notfication_text">
                  <p>
                    <b>{item.no_text_b}</b> {item.no_text_p}
                  </p>
                  <small>{item.no_text_small}</small>
                </div>
              </article>
            ))}
          </div>
        </li>
        <li>
          <NavLink to="">
            <TiMessages className="l_icon" />
            <span>22</span>
            <h4>Message</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <BsBookmarks className="l_icon" />
            <h4>Bookmarks</h4>
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <BsGraphUp className="l_icon" />
            <h4>Analytics</h4>
          </NavLink>
        </li>

        <li>
          <NavLink to="">
            <FiSettings className="l_icon" />
            <h4>Settings</h4>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default L_sidbar
