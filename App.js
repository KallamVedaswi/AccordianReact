import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import About from './About';
import Book from './Book';
import Book1 from './Book1';
import AdminModule from './AdminModule';
import Flight1 from './Flight1';
import  AccordionComponent from './AccordionComponent';



let router = createBrowserRouter([
  {
    path:"home",
    element:<Home/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"book",
    element:<Book/>
  },
  {
    path:"book1",
    element:<Book1/>
  },
  {
    path:"adminModule",
    element:<AdminModule/>
  },
  {
    path:"flight1",
    element:<Flight1/>
  },
  {
    path:"accordioncomponent",
    element:< AccordionComponent/>
  }
  
])

function App() {
  return (
    <RouterProvider router={router}/>

  );
}

export default App;
