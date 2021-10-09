import { useState, useEffect } from "react"
import ButtonAdd from "../ButtonAdd/ButtonAdd"
import CreateUsers from "../CreateUsers/CreateUsers"
import { getUsers } from "../Utills/apiServices"
import styles from "./UserList.module.css"

const UsersList = () => {
  const [usersList, setUsersList] = useState([])
  const [closeModal, setCloseModal] = useState(false)

  const [successMessage, setSuccessMessage] = useState(false)

  useEffect(() => {
    getUsers()
      .then(({ data }) => setUsersList(data))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (!successMessage) return
    setTimeout(() => {
      setSuccessMessage(false)
    }, 3000)
  }, [successMessage])

  const onSubmit = (user) => {
    setUsersList((prev) => [...prev, user])
  }

  const handleAddUserSuccess = (value) => {
    setSuccessMessage(value)
  }

  return (
    <div className={styles.wrapper}>
      {successMessage && <div className={styles.message}>User is added!</div>}
      <h1>User info</h1>
      <ButtonAdd onHandleClick={() => setCloseModal(true)} />
      <ul className={styles.userList}>
        {usersList.map((user) => (
          <li className={styles.userItem} key={user.id}>
            <div className={styles.userInfoWrapper}>
              <p>
                <span className={styles.userInfo}>Title: </span>
                {user.title}
              </p>
              <p>
                <span className={styles.userInfo}>First Name: </span> {user.firstName}
              </p>
              <p>
                <span className={styles.userInfo}>Last Name: </span>
                {user.lastName}
              </p>
            </div>

            <img className={styles.picture} src={user.picture} alt={user.lastName} />
          </li>
        ))}
      </ul>
      <CreateUsers
        closeModal={closeModal}
        setCloseModal={setCloseModal}
        onSubmit={onSubmit}
        handleAddUserSuccess={handleAddUserSuccess}
      />
    </div>
  )
}

export default UsersList
