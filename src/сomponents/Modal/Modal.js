import React, { useEffect } from "react"
import { Overlay } from "./ModalStyled"

const Modal = ({ closeModal, setCloseModal, children, nameForm = "Name form" }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape)
    const body = document.querySelector("body")
    if (closeModal) body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleEscape)
      const body = document.querySelector("body")
      body.style.overflow = "auto"
    }
  })

  const handleEscape = (e) => e.code === "Escape" && setCloseModal()

  const onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && setCloseModal()
  }
  return (
    <>
      {closeModal && (
        <Overlay onClick={onOverlayClick}>
          <div className="modal">
            <button type="button" className="closeBtn" onClick={() => setCloseModal()}>
              <span>X</span>
            </button>
            <h2 className="nameForm">{nameForm}</h2>
            {children}
            <button type="button" className="cancelBtn" onClick={() => setCloseModal()}>
              Close
            </button>
          </div>
        </Overlay>
      )}
    </>
  )
}

export default Modal
