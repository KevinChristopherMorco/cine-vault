import React, { useEffect, useState } from "react";

const useMovieCertification = (details, isAppendLoading) => {
  const [certifications, setCertifications] = useState();

  useEffect(() => {
    if (!isAppendLoading) {
      const {
        release_dates: { results: certificationResults },
      } = details;

      const groupCertifications = certificationResults
        .filter((x) => x.iso_3166_1 === "US" || x.iso_3166_1 === "PH")
        .reduce((certification, item) => {
          const country = item.iso_3166_1;
          const countryCertification = item.release_dates[0].certification;

          if (!Boolean(certification[country])) {
            certification[country] = countryCertification;
          }
          return certification;
        }, {});

      setCertifications(groupCertifications);
    }
  }, [isAppendLoading]);

  return { certifications };
};

export default useMovieCertification;
