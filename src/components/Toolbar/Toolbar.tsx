'use client'
import React, { FC, MouseEventHandler, useState } from 'react'
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
import { BounceLoader } from 'react-spinners'
import { Modal } from '../ui-components/Modal/Modal'
import { PRISMA_SERVICE } from '@/services/prisma.service'
import { executeFnForAll } from '@/utils/executeFnForAll'

export const Toolbar: FC<IToolbar> = ({ userId }) => {
  const [loading, setLoading] = useState(false);

  const usersId = useAppSelector((state) => state.userManagement.selectedUsersId);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    const btnName = event.currentTarget.name;
    const currentUser = usersId.find(id => id === userId);
    setLoading(true)
    console.log('loading true')
    switch (btnName) {
      case 'unlockedBtn':
        // usersId.forEach(async (userId) => await USER_SERVICE.changeStatus(userId, 'unlocked'));
        for (const userId of usersId) {
          await USER_SERVICE.changeStatus(userId, 'unlocked');
        }
        break;
      case 'lockedBtn':
        // usersId.forEach(async (userId) => await USER_SERVICE.changeStatus(userId, 'locked'));
        for (const userId of usersId) {
          await USER_SERVICE.changeStatus(userId, 'locked');
        }
        currentUser && (signOut({ redirect: false }), router.push('/'));
        break;
      case 'deleteBtn':
        // usersId.forEach(async (userId) => await USER_SERVICE.delete(userId));
        for (const userId of usersId) {
          await USER_SERVICE.delete(userId);
        }
        currentUser && (signOut({ redirect: false }), router.push('/'));
        break;
    }
    console.log('loading false')
    dispatch(reset(true));
    setLoading(false);
    router.refresh();
  }

  return (
    <>
      <div className={styles.wrapper}>
        <UIButton onClick={handleClick} icon={<UnlockedIcon />} name='unlockedBtn' />
        <UIButton onClick={handleClick} icon={<LockedIcon />} name='lockedBtn' />
        <UIButton onClick={handleClick} icon={<DeleteIcon />} name='deleteBtn' />
      </div>

      {loading && (
        <Modal>
          <BounceLoader color="#36d7b7" size={120} />
        </Modal>
      )}
    </>
  )
}
