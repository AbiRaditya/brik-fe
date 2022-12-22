import Modal from "../components/modal/Modal.jsx";

const ModalService = ({ children, modalTitle, closeModal, isModalOpen }) => {
  if (isModalOpen) {
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "15px";
  } else {
    document.body.style.overflow = "unset";
    document.body.style.paddingRight = "0px";
    return null;
  }

  return (
    <Modal onClose={closeModal} modalTitle={modalTitle}>
      {children}
    </Modal>
  );
};
export default ModalService;
