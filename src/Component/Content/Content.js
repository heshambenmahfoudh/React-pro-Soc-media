import React from 'react'
import './Content.css'

import L_sidbar from './Left_sidbars/Links/Links'
import Shortcut from './Left_sidbars/Shortcut/Shortcut'
import Content_post from './Main_contents/Content_post/Content_post'
import Create_post from './Main_contents/Create_post/Create_post'
import Post from './Main_contents/Posts/Post'
import Reguest from './Right_sidbarsss/Reguest/Reguest'
import Message from './Right_sidbarsss/Message/Message'

const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="left_sidbar">
          <L_sidbar />
          <Shortcut />
        </div>
        <div className="main_content">
          <Post />
          <Create_post />
          <Content_post />
        </div>

        <div className="right_sidbar">
          <Message />
          <div className="request">
            <Reguest />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
