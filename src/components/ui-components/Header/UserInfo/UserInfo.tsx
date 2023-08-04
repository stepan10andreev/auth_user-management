'use client'
import React from 'react'
import styles from './User.module.scss'
import { useAppSelector } from '@/components/Hooks/useApp';

export const UserInfo = () => {

  const fullName = useAppSelector((state) => state.userViewForm.fullName);
  const shortName = useAppSelector((state) => state.userViewForm.shortName);

  return (
    <div className={styles.user}>
      <div className={styles.icon}>
          {shortName ? shortName : null}
      </div>
      <h1 className={styles.userName}>
        {fullName ? fullName : 'Ваша Фамилия и Имя'}
      </h1>
    </div>
  )
}

