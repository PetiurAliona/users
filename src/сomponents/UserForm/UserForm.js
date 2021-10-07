import React, { useState } from "react"
import Input from "../Input/Input"
import { addUser } from "../Utills/apiServices"

const UserForm = ({ onSubmit, setCloseModal }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [title, setTitle] = useState("")
  const [picture, setPicture] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await addUser({ title, firstName, lastName, email, picture })
      onSubmit(response)
      setFirstName("")
      setLastName("")
      setEmail("")
      setCloseModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name={firstName}
        label="First Name"
        onChange={(e) => setFirstName(e.currentTarget.value)}
        value={firstName}
        isError
        className=""
        inputId="firstName"
      />
      <label>
        Title
        <select name="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)}>
          <option></option>
          <option value="mr">mr</option>
          <option value="mrs">mrs</option>
          <option value="ms">ms</option>
          <option value="miss">miss</option>
          <option value="dir">dir</option>
        </select>
      </label>
      {/* <label>
        First Name
        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} />
      </label> */}
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={lastName}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // required
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          multiple
          value={email}
          // pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
          placeholder="email@example.com"
          // required
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </label>
      <label>
        Avatar
        <input type="text" name="picture" value={picture} onChange={(e) => setPicture(e.currentTarget.value)} />
      </label>
      <button type="submit">Add user</button>
    </form>
  )
}

export default UserForm
