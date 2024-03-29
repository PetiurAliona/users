import React, { useEffect } from "react"
import styles from "./Modal.module.css"
import sprite from "../Svg/sprite.svg"

const Modal = ({ closeModal, setCloseModal, children, nameForm = "Name form" }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape)
    const body = document.querySelector("body")
    if (closeModal) body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", handleEscape)
      const body = document.querySelector("body")
      body.style.overflow = ""
    }
  })

  const handleEscape = (e) => e.code === "Escape" && setCloseModal()

  const onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && setCloseModal()
  }
  return (
    <>
      {closeModal && (
        <div onClick={onOverlayClick} className={styles.overlay}>
          <div className={styles.modal}>
            <button type="button" className={styles.closeBtn} onClick={() => setCloseModal()}>
              <svg className={styles.closeBtn}>
                <use href={sprite + "#icon-cancel-circle"} />
              </svg>
              {/* <span>X</span> */}
            </button>
            <h2 className={styles.nameForm}>{nameForm}</h2>
            {children}
            <button type="button" className={styles.cancelBtn} onClick={() => setCloseModal()}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
