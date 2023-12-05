import { Kanit } from 'next/font/google'

import '../styles/globals.css'
import NavbarPage from './componens/Navbar'

const inter = Kanit({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']

})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayou ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main>
          <NavbarPage />
          {children}
        </main>
      </body>
    </html>
  )
}