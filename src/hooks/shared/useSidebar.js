import { useState } from "react";

const useSidebar = () => {
  const [isToggle, setToggle] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const handleToggle = () => {
    if (isToggle) {
      setToggle(false);
      setTimeout(() => {
        setVisible(false);
      }, 300);
    } else {
      setToggle(true);
      setVisible(true);
    }
  };

  return { isToggle, isVisible, handleToggle };
};

export default useSidebar;
