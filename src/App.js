import { BrowserRouter } from 'react-router-dom'
import './App.css'
import L_sidbar from './Component/Pages/Content/Left_sidbars/L_sidbar/L_sidbar'
import Shortcut from './Component/Pages/Content/Left_sidbars/Shortcut/Shortcut'
import Content_post from './Component/Pages/Content/Main_contents/Content_post/Content_post'
import Create_post from './Component/Pages/Content/Main_contents/Create_post/Create_post'
import Post from './Component/Pages/Content/Main_contents/Posts/Post'
import Reguest from './Component/Pages/Content/Right_sidbarsss/Reguest/Reguest'
import R_sidbar from './Component/Pages/Content/Right_sidbarsss/R_sidbar/R_sidbar'
import Navbar from './Component/Pages/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

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
              <R_sidbar />
              <div className="request">
                <Reguest />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
