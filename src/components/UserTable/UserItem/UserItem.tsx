import React, { FC } from 'react'
import { IUserItem } from './userItem.interface'
import styles from './UserItem.module.scss'
import { Checkbox } from '@/components/ui-components/tailwinds-components/tailwinds'
import { BlockedIcon } from '@/components/ui-components/Icons/BlockedIcon'
import { UnblockedIcon } from '@/components/ui-components/Icons/UnblockedIcon'

export const UserItem: FC<IUserItem> = ({ name, email, createdAt, lastLogin, isBlocked, id }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Checkbox id='1' color="teal" defaultChecked />
      </div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{createdAt}</div>
      <div>{lastLogin}</div>
      <div>{isBlocked ? <BlockedIcon /> : <UnblockedIcon />}</div>
    </div>
  )
}
