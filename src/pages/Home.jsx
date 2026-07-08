import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MovieList from '../cine/MovieList'
import Footer from '../components/Footer'
import { movieContext } from '../context'

function Home() {
  const [cartData,setCartData] = useState([])
  return (
    < >
    <movieContext.Provider value={{ cartData , setCartData}}>
      <Header/>
      <main>
      <div className="container mx-auto grid gap-14 lg:grid-cols-[218px_1fr]">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <MovieList/>
      </div>
    </main>
    <Footer/>
    </movieContext.Provider>
    </>
  )
}

export default Home
