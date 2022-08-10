import React, { useContext, useRef, useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import "./Modal.css";

//This can be the start of my a la Modal character who has an ice cream head and uses modal verbs

const ModalProvider = ({ children }) => {
  const modalRef = useRef();
  const ModalContext = useContext();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current); //this will be set to the actual HTML DOM element that gets rendered from the div
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef}></div>
    </>
  );
};

export function Modal(onClose, children) {
  const modalNode = useContext(ModalContext);

  if (modalNode === false) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={onClose}></div>
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}

export default ModalProvider;
