import React, { FC, MouseEventHandler } from 'react'
import styles from './UIButton.module.scss'

interface IUIButton {
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.JSX.Element
}

export const UIButton: FC<IUIButton> = ({ text, type, name, onClick, icon }) => {
  return (
    <button
      className={styles.button}
      type={type}
      name={name}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  )
}
