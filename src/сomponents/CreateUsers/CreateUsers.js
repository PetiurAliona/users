import Modal from "../Modal/Modal"
import UserForm from "../UserForm/UserForm"

const CreateUsers = ({ closeModal, setCloseModal }) => {
  return (
    <Modal nameForm="Create user" closeModal={closeModal} setCloseModal={setCloseModal}>
      <UserForm setCloseModal={setCloseModal} />
    </Modal>
  )
}

export default CreateUsers
