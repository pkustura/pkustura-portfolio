import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>

    <nav className="flex justify-between p-5 bg-blue-500 rounded-xl shadow border">
    <div className="flex justify-start text-white">Philip Kustura</div>
      <ul className="flex justify-end space-x-10">
        <li><a href="#about" className="text-white">About</a></li>
        <li><a href="#experience" className="text-white">Experience</a></li>
        <li><a href="#projects" className="text-white">Projects</a></li>
        <li><a href="#contact" className="text-white">Contact Me</a></li>
      </ul>
    </nav>
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <h1 className="text-3xl text-grey-700 font-bold">
        Welcome to my portfolio!
      </h1>

      <Counter/>
    </div>

    </>
  )
}

export default App
