import { useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { COUNTER_CONTEXT } from "../../App";
import "./question.css";
import congratulation from "../../images/congratulation.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    minHeight: "52%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const ModalPages = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(true);
  const { score } = useContext(COUNTER_CONTEXT);

  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    navigate("/");
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container available">
          <div className="flex justify-center">
            <img src={congratulation} alt="" />
          </div>
          <h5
            className="mb-5 font-italic text-center mt-4"
            style={{ fontWeight: "bolder" }}
          >
            Nice Work!{" "}
          </h5>
          <h5
            className="mb-5 font-italic text-center"
            style={{ fontWeight: "bolder" }}
          >
            Total Score: {score}{" "}
          </h5>
          <div className="flex justify-end">
            <button className="btn me-3" onClick={closeModal}>
              cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPages;
