import React from 'react'
import './Header.css'
import avatar2 from '../../assets/avatar2.jpg'
import avatar3 from '../../assets/avatar3.png'
import avatar4 from '../../assets/avatar4.jpg'
import avatar5 from '../../assets/avatar5.jpg'
import avatar9 from '../../assets/avatar9.jpg'

import { HiUserAdd } from 'react-icons/hi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { TiMessages } from 'react-icons/ti'

const Header = () => {
  return (
    <div className="header_profile">
      <div className="container_pro">
        <img src={avatar9} alt="" />
        <div className="pro_details">
          <div className="pro_details_l">
            <img src={avatar4} alt="" />
            <div className="pro_details_text">
              <h4>Hisham mohammed</h4>
              <span>
                <small>120</small> frinds - <small>20</small> mutual
              </span>
              <div>
                <img src={avatar2} alt="" />
                <img src={avatar3} alt="" />
                <img src={avatar4} alt="" />
                <img src={avatar5} alt="" />
              </div>
            </div>
          </div>
          <div className="pro_details_r">
            <div>
              <button>
                <HiUserAdd />
                Friends
              </button>

              <button>
                <TiMessages /> Message
              </button>
            </div>
            <span>
              <BsThreeDotsVertical />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
