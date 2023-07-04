import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import Contactpage from './pages/Contactpage';
import Postpage from './pages/Postpage';
import Destinationspage from './pages/Destinationspage';
import BlogsPage from './pages/BlogsPage';
import Aboutpage from './pages/Aboutpage';



const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path: "/kapcsolat",
        element: <Contactpage />
      },
      {
        path: "/post",
        element: <Postpage />
      }, 
      {
        path: "/destinations",
        element: <Destinationspage />
      },
      {
        path: "/blogs",
        element: <BlogsPage />
      },
      {
        path: "/about",
        element: <Aboutpage />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
