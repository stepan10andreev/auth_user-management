'use client'
import React, { FC } from 'react'
import { IUserTable } from './userTable.interface'
import styles from './UserTable.module.scss'
import { UserItem } from './UserItem/UserItem'
import { Checkbox } from '../ui-components/tailwinds-components/tailwinds'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { selectAll } from '@/store/userManagement'

export const UserTable: FC<IUserTable> = ({ usersList }) => {

  const checkedValue = useAppSelector((state) => state.userManagement.selectAll);

  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(selectAll())
  }
  return (
    <div className={styles.table}>
      <div className={styles.headings}>
        <div>
          <Checkbox id='1' color="indigo" defaultChecked onChange={handleChange} checked={checkedValue}/>
        </div>
        <div>id</div>
        <div>name</div>
        <div>email</div>
        <div>createdAt</div>
        <div>lastLogin</div>
        <div>status</div>

      </div>
      {usersList.map((user, index) => (
        <UserItem
          key={user.id}
          name={user.name}
          email={user.email}
          createdAt={user.createdAt}
          lastLogin={user.lastLogin}
          isBlocked={user.isBlocked}
          id={user.id}
        />
      ))}

    </div>
  )
}
