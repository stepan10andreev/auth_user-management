import type { Metadata } from 'next'
import { Header } from '@/components/ui-components/Header/Header'
import { Welcome } from '@/components/ui-components/Welcome/Welcome'

export const metadata: Metadata = {
  title: 'Users | Table',
}

export default function UserTableLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
