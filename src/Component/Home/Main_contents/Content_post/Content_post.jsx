import React from 'react'
import './Content_post.css'
import { content_post } from '../../../assets/Data/dummy'

const Content_post = () => {
  return (
    <div className="App_post">
      {content_post.map((item, i) => (
        <div className="content_post" key={i}>
          <div className="co_post_user">
            <div className="post_user_con">
              <img src={item.pro_img} alt="" />
              <div>
                <p>{item.pro_name}</p>
                <small>{item.pro_date}</small>
              </div>
            </div>
            <span className="post_user_icon">{item.icon_dots}</span>
          </div>
          <div className="c_post-text">
            <p>
              {item.text_short} <span>{item.name_post}</span>
              {item.text_post}
              <a href="">{item.link_post}</a>
            </p>
            <img src={item.po_img} alt="" />
          </div>
          <div className="c_post_comment">
            <div className="comment_icon">
              <span>{item.icon_comm1}</span>
              <span>{item.icon_comm2}</span>
              <span>{item.icon_comm3}</span>
            </div>
            <div className="p_comment_img">
              <img src={item.comm_img} alt="" />
              {item.icon_comm4}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content_post
