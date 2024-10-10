import React from "react";

const getMovieCertification = (data, isAppendLoading) => {
  if (isAppendLoading) return {};
  const {
    release_dates: { results: certificationResults },
  } = data;

  return certificationResults
    .filter((x) => x.iso_3166_1 === "US" || x.iso_3166_1 === "PH")
    .reduce((certification, item) => {
      const country = item.iso_3166_1;
      const countryCertification = item.release_dates[0].certification;

      if (!Boolean(certification[country])) {
        certification[country] = countryCertification;
      }
      return certification;
    }, {});
};

export default getMovieCertification;
