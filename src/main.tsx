import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home/index";
import { Movie } from "./pages/Movie/index";
import { Search } from "./pages/Search/index";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/Movie/:id' element={<Movie />} />
          <Route path='Search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
