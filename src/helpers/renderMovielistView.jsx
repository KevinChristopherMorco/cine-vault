import React from "react";

import CompactView from "../components/shared/card-view/CompactView";
import GridView from "../components/shared/card-view/GridView";
import DetailedView from "../components/shared/card-view/DetailedView";

const renderMovielistView = (movieData, isLoading, viewType) => {
  switch (viewType) {
    case "compactView":
      return <CompactView movieData={movieData} isLoading={isLoading} />;
    case "gridView":
      return <GridView movieData={movieData} isLoading={isLoading} />;
    case "detailedView":
      return <DetailedView movieData={movieData} isLoading={isLoading} />;
    default:
      return null;
  }
};

export default renderMovielistView;
