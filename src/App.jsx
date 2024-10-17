import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-inter";

import Layout from "./pages/Layout";
import HomeContainer from "./pages/home/HomeContainer";
import VideoContainer from "./pages/videos/VideoContainer";
import MoviesListContainer from "./pages/movies-list/MoviesListContainer";
import MoviesSummaryContainer from "./pages/movies-summary/MoviesSummaryContainer";
import GenreContainer from "./pages/genre/GenreContainer";
import MoviesGenreListContainer from "./pages/movies-genre-list/MoviesGenreListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeContainer />} />
          <Route path="/video/:movieID" element={<VideoContainer />} />
          <Route path="/movies-list/:list" element={<MoviesListContainer />} />
          <Route
            path="/movies-summary/:id"
            element={<MoviesSummaryContainer />}
          />
          <Route path="/genre/:genreID" element={<GenreContainer />} />
          <Route
            path="/list-of-movies/:genreID"
            element={<MoviesGenreListContainer />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
