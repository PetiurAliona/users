import React from "react"

import styles from "./Input.module.css"

export default function Input({
  name,
  label,
  onChange,
  value,
  isError,
  className = "",
  type = "text",
  inputId,
  ...rest
}) {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <input
        type={type}
        className={`${styles.input} ${isError && styles.inputError}`}
        placeholder=" "
        name={name}
        id={inputId}
        onChange={onChange}
        value={value}
        {...rest}
      />
      <div className={`${styles.bottomLine} ${isError && styles.bottomLineError}`}></div>
      {isError && <span className={styles.error}>{isError}</span>}
      <label htmlFor={inputId} className={`${styles.label} ${isError && styles.labelError}`}>
        {label}
      </label>
    </div>
  )
}
