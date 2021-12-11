import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import HomePage from './pages/home/HomePage';
import ExplorePage from './pages/explore/ExplorePage';
import ArtistPage from './pages/artist/ArtistPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route  path="/" element={ <HomePage /> }/>
          <Route  path="/explore" element={ <ExplorePage /> }/>
          <Route  path="/artist/:username" element={ <ArtistPage /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
