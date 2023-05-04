import React, { useState } from 'react'
import Hero from './Hero'
import Requirement from './Requirement'
import About from './About'
import Footer from '../components/Footer'
import Questions from './Q&A'
import Partnership from './Partnership'
import RegNext from './authentication/RegNext'
import ExpenseTracker from './Draw'

function Home() {
  
  return (
    <div >
      
        
        <Requirement/>
        <About/>
        <Questions/>
        <Partnership/>
        
    </div>
  )
}

export default Home