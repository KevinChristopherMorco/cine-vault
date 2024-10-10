import React, { useEffect, useState } from "react";

const useModalControls = () => {
  const [isModalOpen, setModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList = "";
    }
  }, [isModalOpen]);
  return { isModalOpen, setModal, modalData, setModalData };
};

export default useModalControls;
