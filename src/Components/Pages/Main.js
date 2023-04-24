import React from 'react'
import '../Styles/Main.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Home } from './Home';
import { Trending } from './Trending';
import { PlaylistDisplay } from './PlaylistDisplay';
import { Top } from './Top';


function Main() {
  return (
    <div className='Main'>
      <Router>
      <ul className='unordered-list2'>
        <li>
          <NavLink to="/" className="List"><span>Home</span></NavLink>
        </li>
        <li>
          <NavLink to="/trending" className="List"><span>Trending</span></NavLink>
        </li>
        <li>
          <NavLink to="/Podcasts" className="List" ><span>Podcasts</span></NavLink>
        </li>
        <li>
          <NavLink to="/Playlist" className="List" ><span>Current</span></NavLink>
        </li>
      </ul>

        <Routes>
          <Route path='/' element={<Top />} />
          <Route index element={<Home />} />
          <Route path='/Trending' element={<Trending />} />
          <Route path='/Player' element={<PlaylistDisplay />} />
          <Route path='/Podcasts' element={<PlaylistDisplay />} />
        </Routes>
      </Router>
    </div>
  )
}

export {Main}
