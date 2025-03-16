import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onClose: ()=> void;
  image: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal opened"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          border: "none",
          background: "none",
        },
      }}
    >
      <div>
        <img
          onClick={onClose as React.MouseEventHandler<HTMLImageElement>}
          src={image}
          style={{ maxWidth: "90vw", maxHeight: "90vh" }}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;