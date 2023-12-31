import React, { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { IUserItem } from './userItem.interface'
import styles from './UserItem.module.scss'
import { Checkbox } from '@/components/ui-components/tailwinds-components/tailwinds'
import { BlockedIcon } from '@/components/ui-components/Icons/BlockedIcon'
import { UnblockedIcon } from '@/components/ui-components/Icons/UnblockedIcon'
import { useAppDispatch, useAppSelector } from '@/components/Hooks/useApp'
import { EMethods, manageUsers, reset } from '@/store/userManagement'
import { getDateString } from '@/utils/getDateString'

export const UserItem: FC<IUserItem> = ({ name, email, createdAt, lastLogin, isBlocked, id }) => {
  const [checked, setChecked] = useState(false);

  const selectAllValue = useAppSelector((state) => state.userManagement.selectAll);
  const resetStatus = useAppSelector((state) => state.userManagement.reset);

  const dispatch = useAppDispatch();

  useEffect(() => {
    selectAllValue ? setChecked(true) : setChecked(false);
    resetStatus && (setChecked(false), dispatch(reset(false)));
  }, [selectAllValue, resetStatus])


  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentChecked = event.currentTarget.checked;
    setChecked(!checked)
    currentChecked ? dispatch(manageUsers(id, EMethods.add)) : dispatch(manageUsers(id, EMethods.delete))
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <Checkbox id={id} color="teal" checked={checked} onChange={handleChange} />
      </div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{email}</div>
      <div suppressHydrationWarning>{getDateString(createdAt)}</div>
      <div suppressHydrationWarning>{getDateString(lastLogin)}</div>
      <div>{isBlocked ? <BlockedIcon /> : <UnblockedIcon />}</div>
    </div>
  )
}
