import React from 'react'
import './Navbar.css'
import avatar from '../assets/avatar.jpg'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { MdFeedback } from 'react-icons/md'
import { user_menu_drop } from '../assets/Data/dummy'

const Navbar = () => {
  const [active, setActive] = React.useState(false)

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="">
            <h2>Arab media</h2>
          </Link>
        </div>
        <div className="nav_right">
          <div className="search">
            <span>
              <BsSearch />
            </span>
            <input type="search" placeholder="search" />
          </div>
          <div className="nav_user">
            <div className="img_user">
              <img
                src={avatar}
                alt=""
                onClick={() => setActive((prev) => !prev)}
              />
            </div>
            {active && (
              <div
                className="user_menu"
                onClick={() => setActive((prev) => !prev)}
              >
                <div className="u_m_profile">
                  <div>
                    <img src={avatar} alt="" />
                    <p>
                      <h4>Saeed ali</h4>
                      <small>See youre profile</small>
                    </p>
                  </div>
                  <span>jgfrih</span>
                </div>
                <div className="u_m_feedbak">
                  <span>
                    <MdFeedback />
                  </span>
                  <p>
                    <h4>Give feedbak</h4>
                    <small>Help us the improve the new desing</small>
                  </p>
                </div>
                <div className="u_m_drop ">
                  {user_menu_drop.map((item, i) => (
                    <article key={i}>
                      <div>
                        <span>{item.m_icon}</span>
                        <h4>{item.m_name}</h4>
                      </div>
                      <span>{item.m_icon2}</span>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
