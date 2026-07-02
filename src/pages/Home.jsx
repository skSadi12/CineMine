import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MovieList from '../cine/MovieList'
import Footer from '../components/Footer'

function Home() {
  return (
    < >
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
    </>
  )
}

export default Home
