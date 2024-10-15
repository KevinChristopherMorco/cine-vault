const getMovieGenre = (data) => {
  return data.genres.map((genre) => genre);
};

export default getMovieGenre;
