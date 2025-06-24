import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'


function App() {

  return (
    <>
       <Navbar/>
      <div className="bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)][background-size:16px_16px]">
      <Manager/>
      </div>
      <Footer/>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
    </>
  )
}

export default App
