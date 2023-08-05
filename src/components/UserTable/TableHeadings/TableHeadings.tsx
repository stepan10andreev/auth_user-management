import { Checkbox } from '@material-tailwind/react'
import React, { FC } from 'react'
import styles from '../UserTable.module.scss'
import { ITableHeadings } from './tableHeadings.interface'

export const TableHeadings: FC<ITableHeadings> = ({ onChange, checkedValue }) => {
  return (
    <div className={styles.headings}>
      <div>
        <Checkbox id='selectAllUsers' color="indigo" onChange={onChange} checked={checkedValue} />
      </div>
      <div>id</div>
      <div>name</div>
      <div>email</div>
      <div>createdAt</div>
      <div>lastLogin</div>
      <div>status</div>
    </div>
  )
}
