import React, { useEffect, useRef } from "react";
import { CloseModalIcon } from "../../config/Images";

interface ModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  headerText: string;
}

const Modal: React.FC<ModalProps> = ({
  headerText,
  isOpen,
  setOpen,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", closeOnEscape);
    }

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, setOpen]);

  const closeModal = () => {
    setOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div
        className="modal-wrap col-lg-4 col-sm-10"
        style={{ height: "auto", borderRadius: "10px" }}
        ref={modalRef}
      >
        <button aria-label="Close" className="close-modal" onClick={closeModal}>
          <img src={CloseModalIcon} alt="Close" />
        </button>
        <div className="modal-inner-window" style={{ height: "auto" }}>
          <div className="modal-header justify-content-center">
            <h3>{headerText}</h3>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
