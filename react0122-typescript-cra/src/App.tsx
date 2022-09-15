import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchArticle from './components/FetchArticle'
import SingleArticle from './components/SingleArticle'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={<FetchArticle/>}
            />
            {<Route path="/:id" element={<SingleArticle/>} />}
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
