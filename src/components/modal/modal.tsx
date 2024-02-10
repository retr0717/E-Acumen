import React from "react";
import ReactModal from "react-modal";

const Modal = (props: any) => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <ReactModal
        isOpen={props.modal}
        ariaHideApp={false}
        contentLabel="label example"
      >
        modal
      </ReactModal>
    </div>
  );
};

export default Modal;
