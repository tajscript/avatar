import '@styles/globals.css'
import { Lato, Montserrat, Cormorant } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato',
})

const mont = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
})

const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'Avatar Bmb',
  description: 'Portfolio website for a graphics designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${mont.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  )
}
