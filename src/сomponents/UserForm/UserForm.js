import React, { useState } from "react"

const UserForm = ({ onSubmit, setCloseModal }) => {
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")

  const handleChangeName = (e) => {
    setName(e.currentTarget.value)
    setLastName(e.currentTarget.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(title, name, lastName, email)
    setName("")
    setLastName("")
    setEmail("")
    setCloseModal()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <select name="title" value={title}>
          <option>mr</option>
          <option>mrs</option>
          <option>ms</option>
          <option>miss</option>
          <option>dir</option>
        </select>
      </label>
      <label>
        First Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChangeName}
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={lastName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChangeName}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          multiple
          value={email}
          pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
          placeholder="email@example.com"
          required
          onChange={handleChangeEmail}
        />
      </label>
      <label>
        Avatar
        <input type="file" />
      </label>
      <button type="submit">Add user</button>
    </form>
  )
}

export default UserForm
