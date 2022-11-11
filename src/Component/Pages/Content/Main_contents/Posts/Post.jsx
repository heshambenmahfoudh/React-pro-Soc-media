import React from 'react'
import './Post.css'
import { BsPlus } from 'react-icons/bs'
import { posts } from '../../../assets/Data/dummy'
import avatar from '../../../assets/avatar.jpg'

const Post = () => {
  return (
    <div className="posts">
      <div className="story">
        <article
          style={{
            backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${avatar})`,
          }}
        >
          <BsPlus />
          <p>rabee ali</p>
        </article>
        {posts.map((item, i) => (
          <article
            style={{
              backgroundImage: `linear-gradient(transparent, rgba(0, 0, 0, 0.7))
              , url(${item.im_story})`,
            }}
            key={i}
          >
            <img src={item.im_story} alt="" />
            <p> {item.n_story}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Post
