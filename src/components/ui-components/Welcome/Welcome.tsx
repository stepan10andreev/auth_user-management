import React, { FC } from 'react'
import { IWelcome } from './welcome.interface'
import styles from './Welcome.module.scss'

export const Welcome: FC<IWelcome> = ({ greeting, As = 'p' }) => {
  return (
    <As className={styles.greeting}>{greeting}</As>
  )
}
