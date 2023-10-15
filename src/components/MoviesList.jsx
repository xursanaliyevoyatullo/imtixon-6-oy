import { Link } from "react-router-dom"
import React from 'react'

function MoviesList({ movies }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 px-5">
      {movies && movies.map((movie) => {
        const { Poster, Title, imdbID, Year } = movie
        return (
          <li key={imdbID} className="card h-[400px] shadow-xl flex flex-col mb-5">
            <figure className="object-cover pt-10">
              <img src={Poster} alt={Title} />
            </figure>
            <div className="px-3 text-center">
              <h2 className="text-base font-bold mt-2">{Title}</h2>
              <h2 className="font-medium mb-2">{Year}-year</h2>
            </div>
            <div className="btn btn-outline btn-warning mb-3 w-[280px] m-auto">
              <Link to={`/movie/${imdbID}`}>Read More</Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default MoviesList