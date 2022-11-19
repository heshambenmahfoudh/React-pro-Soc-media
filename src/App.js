import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Profile from './Component/Profile/Profile'
function App() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route exact path="/" element={<Home search={search} />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
