import React, { useState } from "react"
import Input from "../Input/Input"
import { addUser } from "../Utills/apiServices"

import styles from "./UserForm.module.css"

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

      <Input
        name={firstName}
        label="First Name"
        onChange={(e) => setFirstName(e.currentTarget.value)}
        value={firstName}
        isError
        className=""
        inputId="firstName"
      />
      <Input
        name={lastName}
        label="Last Name"
        onChange={(e) => setLastName(e.currentTarget.value)}
        value={lastName}
        isError
        className=""
        inputId="lastName"
      />
      <Input
        name={email}
        label="Email"
        onChange={(e) => setEmail(e.currentTarget.value)}
        value={email}
        isError
        className=""
        inputId="email"
      />

      <Input
        name={picture}
        label="Avatar"
        onChange={(e) => setPicture(e.currentTarget.value)}
        value={picture}
        isError
        className=""
        inputId="picture"
      />
      <button type="submit" className={styles.addBtn}>
        Add user
      </button>
    </form>
  )
}

export default UserForm
