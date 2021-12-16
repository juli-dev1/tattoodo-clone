import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import HomePage from './pages/home/HomePage';
import ExplorePage from './pages/explore/ExplorePage';
import ArtistsPage from './pages/artists/ArtistsPage';



function App() {
  return (
    <Router>
      <Header withSearchBar={false}/>
      <Routes>
          <Route  path="/" element={ <HomePage /> }/>
          <Route  path="/explore" element={ <ExplorePage /> }/>
          <Route  path="/artists/:username" element={ <ArtistsPage /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
