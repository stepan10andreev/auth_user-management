'use client'
import React, { ChangeEventHandler, FC } from 'react'
import { IUserTable } from './userTable.interface'
import styles from './UserTable.module.scss'
import { UserItem } from './UserItem/UserItem'
import { Checkbox } from '../ui-components/tailwinds-components/tailwinds'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { EMethods, manageUsers, selectAll } from '@/store/userManagement'
import { TableHeadings } from './TableHeadings/TableHeadings'

export const UserTable: FC<IUserTable> = ({ usersList }) => {

  const checkedValue = useAppSelector((state) => state.userManagement.selectAll);

  const dispatch = useAppDispatch();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentChecked = event.currentTarget.checked;
    dispatch(selectAll())
    currentChecked ? (
      usersList.forEach((user) => dispatch(manageUsers(user.id, EMethods.add)))
    ) : (
      usersList.forEach((user) => dispatch(manageUsers(user.id, EMethods.delete)))
    )
  }
  return (
    <div className={styles.table}>
      <TableHeadings onChange={handleChange} checkedValue={checkedValue}/>

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
