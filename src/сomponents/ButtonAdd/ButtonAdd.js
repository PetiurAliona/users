import styles from "../UserForm/UserForm.module.css"

const ButtonAdd = ({ onHandleClick }) => {
  return (
    <button type="button" className={styles.addBtn} onClick={onHandleClick}>
      Create New User
    </button>
  )
}

export default ButtonAdd
