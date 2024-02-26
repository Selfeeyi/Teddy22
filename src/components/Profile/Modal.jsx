import React, { useEffect, useState } from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%", // Start from the middle of the page vertically
  left: "50%",
  width: "80%", // Adjust width as needed
  maxWidth: "400px", // Set max width if necessary
  backgroundColor: "white",
  zIndex: 1000,
  borderRadius: "8px",
  transform: "translate(-50%, -150%)", // Start above the visible area
  transition: "transform 0.3s ease-out", // Smooth transition
};

const MODAL_CONTENT_STYLES = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 1000,
};

const Modal = ({ children, isOpen, onClose }) => {
  const [modalStyles, setModalStyles] = useState({ ...MODAL_STYLES });

  useEffect(() => {
    if (isOpen) {
      // When modal is opened, bring it to the visible area
      setModalStyles({ ...MODAL_STYLES, transform: "translate(-50%, -50%)" });
    }
  }, [isOpen]);

  const handleClose = () => {
    // Reset modal styles to slide it back above the visible area
    setModalStyles({ ...MODAL_STYLES, transform: "translate(-50%, -150%)" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div style={OVERLAY_STYLES} onClick={handleClose} />
      <div style={modalStyles}>
        <div style={MODAL_CONTENT_STYLES}>{children}</div>
      </div>
    </>
  );
};

export default Modal;
