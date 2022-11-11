import React from 'react'
import './Create_post.css'
import avatar from '../../../assets/avatar.jpg'
import { BsCaretDownFill } from 'react-icons/bs'
import { BsCameraVideo } from 'react-icons/bs'
import { BsCamera } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'

const Create_post = () => {
  return (
    <div className="create_post">
      <div className="c_post_user">
        <img src={avatar} alt="" />
        <div>
          <p>Nasser ali</p>
          <small>
            Public
            <BsCaretDownFill />
          </small>
        </div>
      </div>
      <div className="c_post_input">
        <textarea
          placeholder="What's on youre mind nasser ali"
          cols="30"
          rows="10"
        ></textarea>
        <div className="c_post_link">
          <a href="">
            <BsCameraVideo />
            Live/video
          </a>
          <a href="">
            <BsCamera />
            Photo/video
          </a>
          <a href="">
            <BsEmojiSmile />
            Feeling/activity
          </a>
        </div>
      </div>
    </div>
  )
}

export default Create_post
