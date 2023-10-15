import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import MoviesList from "../components/MoviesList"
import Movies from "../pages/Movies"

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="align-element py-8">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout