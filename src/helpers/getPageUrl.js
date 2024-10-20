import { useLocation } from "react-router-dom";

const getPageUrl = () => {
  const { pathname } = useLocation();

  return pathname;
};

export default getPageUrl;
