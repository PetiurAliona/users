import Modal from "../Modal/Modal"
import UserForm from "../UserForm/UserForm"

const CreateUsers = ({ closeModal, setCloseModal, onSubmit, handleAddUserSuccess }) => {
  return (
    <Modal nameForm="Create user" closeModal={closeModal} setCloseModal={setCloseModal}>
      <UserForm setCloseModal={setCloseModal} onSubmit={onSubmit} handleAddUserSuccess={handleAddUserSuccess} />
    </Modal>
  )
}

export default CreateUsers
