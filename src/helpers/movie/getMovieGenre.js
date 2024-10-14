const getMovieGenre = (data) => {
  return data.genres.map((genre) => genre.name);
};

export default getMovieGenre;
