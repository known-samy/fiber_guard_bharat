import './globals.css'
import { Inria_Sans } from 'next/font/google'
import Navigation from '@/components/navigation/Navigation'
import UserProvider from '@/components/firebase/userProvider'

const inria = Inria_Sans({ weight:['300','400','700'],subsets: ['latin'] })
export const metadata = {
  title: 'Fiber Guard Bharat',
  description: 'Created by Byte Hogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inria.className}>
        <UserProvider>

          <Navigation/>
          {children}
          
        </UserProvider>
        </body>
    </html>
  )
}
