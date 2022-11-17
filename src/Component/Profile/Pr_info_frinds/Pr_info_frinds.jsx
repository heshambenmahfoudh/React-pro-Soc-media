import React from 'react'
import './Pr_info_frinds.css'
import { info_friends } from '../../assets/Data/dummy'

const Pr_info_frinds = () => {
  return (
    <>
      <div className="h_friends">
        <div>
          <h4>Friends</h4>
          <span>
            120 (<b>10</b> mutual)
          </span>
        </div>

        <a href="">All Friends</a>
      </div>
      <div className="all_pfriens">
        {info_friends.map(({ img_friend, name_friend }, i) => (
          <article key={i}>
            <img src={img_friend} alt="" />
            <span> {name_friend}</span>
          </article>
        ))}
      </div>
    </>
  )
}

export default Pr_info_frinds
