import type { Metadata } from 'next'

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
