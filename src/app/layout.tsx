import { Providers } from '@/components/provider'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration',
  description: 'Enter your data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <div id='modal_root'></div>
        </Providers>
      </body>
    </html>
  )
}
