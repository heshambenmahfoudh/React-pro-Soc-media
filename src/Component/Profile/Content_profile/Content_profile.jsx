import React from 'react'
import Content_post from '../../Content/Main_contents/Content_post/Content_post'
import Create_post from '../../Content/Main_contents/Create_post/Create_post'
import './Content_profile.css'
import { BsEmojiSmile } from 'react-icons/bs'
import Pr_info_photo from '../Pr_info_photo/Pr_info_photo'
import { profile_intro } from '../../assets/Data/dummy'
import Pr_info_frinds from '../Pr_info_frinds/Pr_info_frinds'

const Content_profile = () => {
  return (
    <div className="content_profile">
      <div className="container_pro">
        <div className="content_profile_left">
          <div className="c_profile_info_intro">
            <div>
              <h4>Intro</h4>
              <p>
                Believen in youreself and you can do nubelievable things
                <BsEmojiSmile />
              </p>
            </div>
            <div>
              {profile_intro.map(({ intro_icon, intro_title }, i) => (
                <article key={i}>
                  {intro_icon}
                  <span>{intro_title} </span>
                </article>
              ))}
            </div>
          </div>
          <div className="c_profile_info_photo">
            <Pr_info_photo />
          </div>
          <div className="c_profile_info_frinds">
            <Pr_info_frinds />
          </div>
        </div>
        <div className="content_profile_right">
          <Create_post />

          <Content_post />
        </div>
      </div>
    </div>
  )
}

export default Content_profile
