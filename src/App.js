import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './Component/Content/Content'
import Navbar from './Component/Navbar/Navbar'
import Profile from './Component/Profile/Profile'
function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<Content search={search} />} />
          <Route exact path="*" element={<Content />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
