
import Layout from './components/Layout/Layout';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

export default function app(){
  const route = createBrowserRouter([
    {path: "/", element: <Layout/>, children:[
      {index: true, element:<Home/>},
      {path:"about", element:<About/>},
      {path:"portfolio", element:<Portfolio/>},
      {path:"contact", element:<Contact/>},
  ]}
])
  return<>
  <RouterProvider router={route}/>
  </>;
}