
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          loader: () => fetch('tshirt.json')

          ,
          element:<Home></Home>
        },
        {
          path:"/home",
          loader: () => fetch('tshirt.json')

          ,
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
       
        {
          path:"/contact",
          element:<Contact></Contact>
        },
       
      ]
    },
   

  ])
  return (
    <div className="App">
      <RouterProvider
      router={router}
      >

      </RouterProvider>
      
    </div>
  );
}

export default App;
