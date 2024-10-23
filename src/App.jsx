import { BrowserRouter, Routes, Route } from "react-router-dom";
import "typeface-inter";

import ThemeProvider from "./hooks/shared/ThemeProvider";
import FilterProvider from "./hooks/shared/FilterProvider";

import Layout from "./pages/Layout";
import HomeContainer from "./pages/home-page/HomeContainer";
import VideoContainer from "./pages/video-page/VideoContainer";
import MoviesListContainer from "./pages/featured-movies-page/MoviesListContainer";
import MoviesSummaryContainer from "./pages/movies-summary-page/MoviesSummaryContainer";
import GenreContainer from "./pages/genre-page/GenreContainer";
import MoviesGenreListContainer from "./pages/movies-genre-page/MoviesGenreListContainer";
import MoviePhotoContainer from "./components/movies-summary-page/movie-photos/MoviePhotoContainer";
import MovieReviewContainer from "./components/movies-summary-page/movie-reviews/MovieReviewContainer";
import MoviesCastCrewContainer from "./pages/movies-cast-page/MoviesCastCrewContainer";

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
            <Route path="/view-photo/" element={<MoviePhotoContainer />} />
            <Route
              path="/view-photo/:movieID/:photoPath"
              element={<MoviePhotoContainer />}
            />

            <Route
              path="/list-cast-crew/:movieID"
              element={<MoviesCastCrewContainer />}
            />

            <Route
              path="/review/:movieID/"
              element={<MovieReviewContainer />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </FilterProvider>
  );
}

export default App;
