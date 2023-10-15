import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'

//layout
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Error from './pages/Error'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error/>,
      children : [
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/movie/:imdbID",
          element: <Movie/>
        },
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App