import { useState } from "react";

const useImageCount = () => {
  const [imageCount, setImageCount] = useState(0);

  const handleImageCount = (event) => {
    const { id } = event.target;
    if (id === "arrow-asc") setImageCount((prev) => prev + 1);
    if (id === "arrow-desc") setImageCount((prev) => prev - 1);
  };

  const handleFirstImage = () => {
    setImageCount(0);
  };

  const handleFindImage = (imageAr, path) => {
    const imageIndex = imageAr.findIndex(
      (image) => image.file_path === `/${path}`,
    );
    setImageCount(imageIndex);
  };

  return {
    imageCount,
    handleImageCount,
    handleFirstImage,
    handleFindImage,
    setImageCount,
  };
};

export default useImageCount;
