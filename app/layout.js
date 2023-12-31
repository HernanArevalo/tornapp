import { Kanit } from 'next/font/google'
import NavbarPage from './componens/Navbar'
import '../styles/globals.css'

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
