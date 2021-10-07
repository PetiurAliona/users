import React, { useState } from "react"
import Input from "../Input/Input"
import { addUser } from "../Utills/apiServices"

import styles from "./UserForm.module.css"

const UserForm = ({ onSubmit, setCloseModal, handleAddUserSuccess }) => {
  const [title, setTitle] = useState("mr")
  const [picture, setPicture] = useState("")

  const [user, setUser] = useState({ firstName: "", lastName: "", email: "" })

  const [error, setError] = useState({ firstName: null, lastName: null, email: null })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
    setError((prev) => ({ ...prev, [name]: null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let isError = false
    Object.entries(user).forEach(([key, value]) => {
      if (!value) {
        const mes = "This field is required"
        isError = true
        setError((prev) => ({ ...prev, [key]: mes }))
      }
      if (key !== "email") {
        if (value.length < 3 || value.length > 50) {
          const mes = "Field must be at least 3 long and not exceed 50 "
          isError = true
          setError((prev) => ({ ...prev, [key]: mes }))
        }
      }
      if (key === "email") {
        const reg =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (!value.match(reg)) {
          const mes = "Email is not valid"
          isError = true
          setError((prev) => ({ ...prev, [key]: mes }))
        }
      }
    })

    if (isError) return

    try {
      const response = await addUser({ ...user, title, picture })
      onSubmit(response)
      setTitle("")
      setPicture("")
      handleAddUserSuccess(true)
      setCloseModal()
    } catch (e) {
      Object.entries(e.data).forEach(([key, value]) => {
        console.log(key, value)
        setError((prev) => ({ ...prev, [key]: value }))
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <select name="title" defaultValue={title} onChange={(e) => setTitle(e.target.value)}>
          <option value="mr">mr</option>
          <option value="mrs">mrs</option>
          <option value="ms">ms</option>
          <option value="miss">miss</option>
          <option value="dir">dir</option>
        </select>
      </label>

      <Input
        name="firstName"
        label="First Name"
        onChange={handleChange}
        value={user.firstName}
        isError={error.firstName}
        className=""
        inputId="firstName"
      />
      <Input
        name="lastName"
        label="Last Name"
        onChange={handleChange}
        value={user.lastName}
        isError={error.lastName}
        className=""
        inputId="lastName"
      />
      <Input
        name="email"
        label="Email"
        onChange={handleChange}
        value={user.email}
        isError={error.email}
        className=""
        inputId="email"
      />

      <Input
        name="picture"
        label="Avatar"
        onChange={(e) => setPicture(e.currentTarget.value)}
        value={picture}
        isError={null}
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
