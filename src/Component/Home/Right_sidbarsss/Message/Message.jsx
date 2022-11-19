import React from 'react'
import './Message.css'
import { BsSearch } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'

import { r_sidbar_message } from '../../../assets/Data/dummy'

const Message = () => {
  const [search, setSearch] = React.useState('')

  return (
    <div className="r_sidbar">
      <div className="r_sidbar_message">
        <div className="message_head">
          <h2>Message</h2>
          <BiEdit />
        </div>
        <div className="r_m_search">
          <BsSearch />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search message"
          />
        </div>
        <div className="r_m_content">
          <ul>
            <li className="active">Primary</li>
            <li>general</li>
            <li>
              Request <small>(20)</small>
            </li>
          </ul>
          <div className="message_body">
            {r_sidbar_message
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.mess_name.toLowerCase().includes(search)
              })
              .map((item, i) => (
                <article key={i}>
                  <div className="image">
                    <img src={item.mess_img} alt="" />
                  </div>
                  <span>
                    <h4>{item.mess_name}</h4>
                    <small>{item.mess_status}</small>
                  </span>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
