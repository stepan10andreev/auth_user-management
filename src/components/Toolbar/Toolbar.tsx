'use client'
import React, { FC, MouseEventHandler } from 'react'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { UnlockedIcon } from '../ui-components/Icons/UnlockedIcon'
import { LockedIcon } from '../ui-components/Icons/LockedIcon'
import styles from './Toolbar.module.scss'
import { DeleteIcon } from '../ui-components/Icons/DeleteIcon'
import { USER_SERVICE } from '@/services/user.service'
import { useAppDispatch, useAppSelector } from '../Hooks/useApp'
import { useRouter } from 'next/navigation'
import { reset } from '@/store/userManagement'
import { signOut } from "next-auth/react"
import { IToolbar } from './toolbar.interface'

export const Toolbar: FC<IToolbar> = ({ userId }) => {
  const usersId = useAppSelector((state) => state.userManagement.selectedUsersId);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const btnName = event.currentTarget.name;
    const currentUser = usersId.find(id => id === userId);

    switch (btnName) {
      case 'unlockedBtn':
        usersId.forEach(userId => USER_SERVICE.changeStatus(userId, 'unlocked'));
        break;
      case 'lockedBtn':
        usersId.forEach(userId => USER_SERVICE.changeStatus(userId, 'locked'));
        currentUser && (signOut({ redirect: false }), router.push('/'));
        break;
      case 'deleteBtn':
        usersId.forEach(userId => USER_SERVICE.delete(userId));
        currentUser && (signOut({ redirect: false }), router.push('/'));
        break;
    }
    dispatch(reset(true));
    router.refresh();
  }

  return (
    <div className={styles.wrapper}>
      <UIButton onClick={handleClick} icon={<UnlockedIcon />} name='unlockedBtn' />
      <UIButton onClick={handleClick} icon={<LockedIcon />} name='lockedBtn' />
      <UIButton onClick={handleClick} icon={<DeleteIcon />} name='deleteBtn' />
    </div>
  )
}
