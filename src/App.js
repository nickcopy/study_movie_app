import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// import Movie from "./components/Movie";
import MovieList from "./components/MoviesList";
import Clickc from "./components/ClickConuter";
import Menu from "./components/Menu";
import YouTube from "./components/YouTube";
import "./components/App.css";
import Tailwind from "./components/Tailwind";
function Home() {
  return <h2>홈</h2>;
}
function About() {
  return <h2>개발자소계</h2>;
}

function App(props) {
  return (
    <HashRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<MovieList apipath="popular" />} />
        <Route
          path="/now_playing"
          element={<MovieList apipath="now_playing" />}
        />
        <Route path="/upcoming" element={<MovieList apipath="upcoming" />} />
        <Route path="/count" element={<Clickc />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
