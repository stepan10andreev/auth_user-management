import React, { ChangeEventHandler, FC } from 'react'
import styles from './Input.module.scss'

export interface IUIInputProps {
  type: string;
  heading?: string;
  placeholderText?: string;
  name: string;
  value: string;
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div' | null;
  onChange: ChangeEventHandler;
  onBlur?: ChangeEventHandler;
}

export const UIInput: FC<IUIInputProps> = ({ type, heading, placeholderText, name, As = 'h2', onChange, onBlur, value }) => {

  return (
    <label className={styles.label}>
      {As != null && <As className={styles.heading}>{heading}</As>}
      <input
        type={type}
        name={name}
        placeholder={placeholderText}
        value={value}
        className={styles.input}
        onChange={onChange}
        onBlur={onBlur}
      />
    </label>
  )
}


