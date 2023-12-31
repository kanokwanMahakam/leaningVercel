import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
          <div className="w-[256px] h-screen flex flex-col bg-sky-700 gap-4">
            <h1>Sidebar</h1>

            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/todo">Todo</Link>
              </li>
            </ul>
          </div>

          <div className="w-full">
            <div className="w-full h-[60px] flex bg-sky-600">Navbar</div>

            <div className="w-full h-[calc(100vh-(60px*2))] bg-transparent overflow-auto">
              {children}
            </div>

            <div className="w-full h-[60px] flex bg-sky-500">Footer</div>
          </div>
      </body>
    </html>
  )
}
