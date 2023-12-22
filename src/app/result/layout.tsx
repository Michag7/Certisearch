import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import NavBar from '@/components/navbar'




export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <body>
        <header >
          <NavBar />
        </header>


        {children}
        </body>
    </html>
  )
}
