import React from "react";
import { getImageUrl } from "../utils/Cine-utility";
import priceTag from "../assets/tag.svg"

function MovieCard({ movie }) {
  return (
    <figure
     
      className="rounded-xl border border-black/10 p-4 shadow-sm dark:border-white/10"
    >
      <img
        className="w-full object-cover"
        src={getImageUrl(movie.cover)}
        alt={movie.title}
      />

      <figcaption className="pt-4">
        <h3 className="mb-1 text-xl">{movie.title}</h3>

        <p className="mb-2 text-sm text-[#575A6E]">{movie.genre}</p>

        <div className="mb-5 flex items-center space-x-1">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="./assets/star.svg"
              alt="star"
              className="h-4 w-4"
            />
          ))}
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-[#171923]">
          <img src={priceTag} alt="tag" />
          <span>${movie.price} | Add to Cart</span>
        </button>
      </figcaption>
    </figure>
  );
}

export default MovieCard;
