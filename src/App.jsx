import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-inter";

import Layout from "./pages/Layout";
import HomeContainer from "./pages/home-page/HomeContainer";
import VideoContainer from "./pages/video-page/VideoContainer";
import MoviesListContainer from "./pages/featured-movies-page/MoviesListContainer";
import MoviesSummaryContainer from "./pages/movies-summary-page/MoviesSummaryContainer";
import GenreContainer from "./pages/genre-page/GenreContainer";
import MoviesGenreListContainer from "./pages/movies-genre-list-page/MoviesGenreListContainer";
import FilterProvider from "./hooks/shared/FilterProvider";

function App() {
  return (
    <FilterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeContainer />} />
            <Route path="/video/:movieID" element={<VideoContainer />} />
            <Route
              path="/featured-movies-page/:list"
              element={<MoviesListContainer />}
            />
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
    </FilterProvider>
  );
}

export default App;
