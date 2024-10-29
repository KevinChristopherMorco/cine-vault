const getCommonLink = (toggle) => {
  const trendingLink = `https://api.themoviedb.org/3/trending/movie/week?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1
    `;

  const highestRatingLink = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1
    `;

  const nowShowingLink = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits,release_dates&language=en-US&page=1`;

  return { trendingLink, highestRatingLink, nowShowingLink };
};

export default getCommonLink;
