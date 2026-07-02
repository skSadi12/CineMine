import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MovieList from '../cine/MovieList'

function Home() {
  return (
    <div >
      <Header/>
      <main>
      <div className="container mx-auto grid gap-14 lg:grid-cols-[218px_1fr]">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <MovieList/>
      </div>
    </main>
    </div>
  )
}

export default Home
