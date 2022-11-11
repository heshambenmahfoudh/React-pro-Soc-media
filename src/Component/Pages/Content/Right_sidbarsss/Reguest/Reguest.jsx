import React from 'react'
import './Reguest.css'
import { request } from '../../../assets/Data/dummy'
const Reguest = () => {
  return (
    <div className="request">
      <div className="head_req">
        <h3>Requests</h3>
      </div>
      <div className="req_number">
        {request.map((item, i) => (
          <article key={i}>
            <div>
              <img src={item.req_img} alt="" />
              <span>
                <h4>{item.req_name}</h4>
                <small>{item.num_frinds}</small>
              </span>
            </div>
            <div className="btn">
              <button>{item.req_accept}</button>
              <button>{item.req_unaccept}</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Reguest
