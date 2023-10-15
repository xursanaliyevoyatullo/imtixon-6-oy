import { useFetch } from "../hooks/useFetch"
import MoviesList from "../components/MoviesList"
import { useState } from "react";

function Home() {
    const [item, setItem] = useState('Mission Impossible')
    const { data: movies, isPending, error } = useFetch(`http://www.omdbapi.com/?s=${item}&apikey=bb1151cd`)
    return (
        <div>
            <div className="flex items-center gap-5">
                <div>
                    <h1 className="mb-2 font-medium text-center">Search Movies 👇</h1>
                    <input
                        onChange={(e) => setItem(e.target.value)}
                        className="input input-bordered border-yellow-300 w-full max-w-xs mb-10" type="text"
                        placeholder="search for movies..." value={item}
                    />
                </div>
            </div>
            {movies && <MoviesList movies={movies && movies.Search} />}
        </div>
    )
}

export default Home