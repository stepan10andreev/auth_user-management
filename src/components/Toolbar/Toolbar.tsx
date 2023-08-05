import React from 'react'
import { UIButton } from '../ui-components/UIButton/UIButton'
import { UnlockedIcon } from '../ui-components/Icons/UnlockedIcon'
import { LockedIcon } from '../ui-components/Icons/LockedIcon'
import styles from './Toolbar.module.scss'
import { DeleteIcon } from '../ui-components/Icons/DeleteIcon'

export const Toolbar = () => {
  return (
    <div className={styles.wrapper}>
      {/* <UIButton text='Block' /> */}
      <UIButton icon={<UnlockedIcon />} name='unlockedBtn'/>
      <UIButton icon={<LockedIcon />} name='lockedBtn'/>
      <UIButton icon={<DeleteIcon />} name='deleteBtn'/>
    </div>
  )
}
