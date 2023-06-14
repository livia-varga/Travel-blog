import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import Contactpage from './pages/Contactpage';
import Postpage from './pages/Postpage';
import Destinationspage from './pages/Destinationspage';



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
