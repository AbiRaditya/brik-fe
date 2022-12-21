import React from "react";
import ReactDom from "react-dom";
import "./Modal.scss";

const Modal = ({ open, children, onClose, modalTitle }) => {
  return ReactDom.createPortal(
    <>
      <div className="modal__overlay"></div>
      <div className="modal">
        <div className="modal__header">
          <h3
            className="modal__title"
            style={{
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {modalTitle}
          </h3>
          <div className="remove-button">
            <button style={{ marginTop: "unset" }} onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer"></div>
      </div>
    </>,
    document.getElementById("main-modal")
  );
};

export default Modal;
