import React, { useContext, useState } from "react";
import { getImageUrl } from "../utils/Cine-utility";
import priceTag from "../assets/tag.svg"
import Rating from "./Rating";
import MovieModal from "./MovieModal ";
import { movieContext } from "../context";

function MovieCard({ movie }) {
  const[showModal,setShowModal]=useState(false)
  const[selectedMovie,setSelectedMovie]=useState(null)
  const {cartData,setCartData} = useContext(movieContext)
  function handleModalClose(){
    setSelectedMovie(null)
    setShowModal(false)
    
  }
  function handleMovieSelection(movieData){
    setSelectedMovie(movieData)
    setShowModal(true)

  }
  function handleAddToCart(e ,movieData){
    setShowModal(false)
    console.log(cartData)
    e.stopPropagation()
    const found = cartData.find((item)=>{
      return item.id === movieData.id
    })
    if(!found){
      setCartData([...cartData ,  movieData])
    }else{
      alert(`${movieData.title} is already added to cart`)
    }
  }
  return (
    <>
    {showModal && <MovieModal movie={selectedMovie} onClose={handleModalClose} onAddingToCart={handleAddToCart} />}
    
    <figure
     
      className="rounded-xl border border-black/10 p-4 shadow-sm dark:border-white/10"
    >
      <a href="#" onClick={()=> handleMovieSelection(movie)}>
      <img
        className="w-full h-100 object-cover"
        src={getImageUrl(movie.cover)}
        alt={movie.title}
      />

      <figcaption className="pt-4">
        <h3 className="mb-1 text-xl">{movie.title}</h3>

        <p className="mb-2 text-sm text-[#575A6E]">{movie.genre}</p>

        <div className="mb-5 flex items-center space-x-1">
          <Rating value={movie.rating}/>
        </div>

        <button onClick={(e)=>handleAddToCart(e ,movie)} className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-[#171923]">
          <img src={priceTag} alt="tag" />
          <span>${movie.price} | Add to Cart</span>
        </button>
      </figcaption>
      </a>
    </figure>
    
    </>
  );
}

export default MovieCard;
