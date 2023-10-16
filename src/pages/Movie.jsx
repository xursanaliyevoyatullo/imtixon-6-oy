import { useParams, NavLink } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function Movie() {
  const { imdbID } = useParams()
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=2b8d4e56`
  const { data, isPending, error } = useFetch(url)
  if (data === null) {
    return (
      <div>
        <h1 className="text-center text-3xl font-medium text-yellow-500">Loading...</h1>
      </div>
    );
  }

  const { Poster, Title, Year, Awards, Genre, Actors, Language, Country, } = data
  return (
    <div className="card-list-items">
      {data && <>
        <img className="rounded-xl" src={Poster} alt={Title} height="300" width="300" />
        <div className="card-texts">
          <h2 className="text-xl font-bold mb-4 text-yellow-500">{Title}</h2>
          <p className="mb-5 font-medium">
            <span className="font-medium text-yellow-500">Year: </span>
            {Year}-y
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-yellow-500">Genre: </span>
            {Genre}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-yellow-500">Actors: </span>
            {Actors}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-yellow-500">Language: </span>
            {Language}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-yellow-500">Country: </span>
            {Country}
          </p>
          <p className="mb-5 font-medium">
            <span className="font-medium text-yellow-500">Awards: </span>
            {Awards}
          </p>
          <NavLink className="card-btn btn btn-outline btn-warning" to="/">Go Movies</NavLink>
        </div>
      </>}
    </div>
  )
}

export default Movie