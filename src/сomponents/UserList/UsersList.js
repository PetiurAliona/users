import { useState, useEffect } from "react"
import ButtonAdd from "../ButtonAdd/ButtonAdd"
import CreateUsers from "../CreateUsers/CreateUsers"
import { getUsers } from "../Utills/apiServices"

const UsersList = () => {
  const [usersList, setUsersList] = useState([])

  const [closeModal, setCloseModal] = useState(false)

  useEffect(() => {
    getUsers()
      .then(({ data }) => setUsersList(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>User info</h1>
      <ButtonAdd onHandleClick={() => setCloseModal(true)} />
      <ul>
        {usersList.map((user) => (
          <li key={user.id}>
            <p>Title: {user.title} </p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <img src={user.picture} alt={user.lastName} />
          </li>
        ))}
      </ul>

      <CreateUsers closeModal={closeModal} setCloseModal={setCloseModal} />
    </div>
  )
}

export default UsersList
