import React, { FC, useEffect, useState } from 'react'
import { IUserItem } from './userItem.interface'
import styles from './UserItem.module.scss'
import { Checkbox } from '@/components/ui-components/tailwinds-components/tailwinds'
import { BlockedIcon } from '@/components/ui-components/Icons/BlockedIcon'
import { UnblockedIcon } from '@/components/ui-components/Icons/UnblockedIcon'
import { useAppSelector } from '@/components/Hooks/useApp'

export const UserItem: FC<IUserItem> = ({ name, email, createdAt, lastLogin, isBlocked, id }) => {
  const [checked, setChecked] = useState(false);

  const selectAllValue = useAppSelector((state) => state.userManagement.selectAll);

  useEffect(() => {
    selectAllValue ? setChecked(true) : setChecked(false);
  }, [selectAllValue])

  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div className={styles.wrapper}>
      <div>
        <Checkbox id='1' color="teal" defaultChecked checked={checked} onChange={handleChange}/>
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
