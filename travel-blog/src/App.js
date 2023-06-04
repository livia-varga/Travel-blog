import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import Contactpage from './pages/Contactpage';



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
