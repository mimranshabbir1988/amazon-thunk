import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Products from './Products'

const Main = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <Slider />
        <Products />
    </div>
  )
}

export default Main