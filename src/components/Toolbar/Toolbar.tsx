'use client'
import React, { MouseEventHandler } from 'react'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { UnlockedIcon } from '../ui-components/Icons/UnlockedIcon'
import { LockedIcon } from '../ui-components/Icons/LockedIcon'
import styles from './Toolbar.module.scss'
import { DeleteIcon } from '../ui-components/Icons/DeleteIcon'
import { USER_SERVICE } from '@/services/user.service'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { useRouter } from 'next/navigation'
import { reset } from '@/store/userManagement'

export const Toolbar = () => {
  const usersId = useAppSelector((state) => state.userManagement.selectedUsersId);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const btnName = event.currentTarget.name;
    console.log(btnName)
    switch (btnName) {
      case 'unlockedBtn':
        usersId.forEach(usersId => USER_SERVICE.changeStatus(usersId, 'unlocked'));
        break;
      case 'lockedBtn':
        usersId.forEach(usersId => USER_SERVICE.changeStatus(usersId, 'locked'))
        break;
      case 'deleteBtn':
        usersId.forEach(usersId => USER_SERVICE.delete(usersId))
        break;
    }
    dispatch(reset());
    router.refresh();
  }

  // const handleLocked = () => {
  //   usersId.forEach(usersId => USER_SERVICE.changeStatus(usersId, 'locked'))
  //   dispatch(reset());
  //   router.refresh();
  // }

  // const handleDeleted = () => {
  //   // usersId.forEach(usersId => USER_SERVICE.changeStatus(usersId, 'locked'))
  // }

  return (
    <div className={styles.wrapper}>
      <UIButton onClick={handleClick} icon={<UnlockedIcon />} name='unlockedBtn' />
      <UIButton onClick={handleClick} icon={<LockedIcon />} name='lockedBtn' />
      <UIButton onClick={handleClick} icon={<DeleteIcon />} name='deleteBtn' />
    </div>
  )
}
