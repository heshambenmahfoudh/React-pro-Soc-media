import React from 'react'
import './Pr_info_photo.css'
import { info_photo } from '../../assets/Data/dummy'

const Pr_info_photo = () => {
  return (
    <>
      <div className="h_photo">
        <h4>Photo</h4>

        <a href="">All Photos</a>
      </div>
      <div className="all_photo">
        {info_photo.map(({ photo }, i) => (
          <div key={i}>
            <img src={photo} alt="" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Pr_info_photo
