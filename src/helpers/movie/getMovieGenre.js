const getMovieGenre = (data) => {
  console.log(data);
  return data.genres.map((genre) => genre.name);
};

export default getMovieGenre;
