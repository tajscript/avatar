import '@styles/globals.css'
import { Lato, Montserrat, Cormorant } from 'next/font/google'
import Nav from '@components/Nav'
import { createClient } from '@prismicio'
import { Metadata } from 'next'

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

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient()

  const page = await client.getSingle("settings")
 
  return {
    title: page.data.site_title || "Avatar Bmb",
    description: page.data.meta_description || "A portfolio website for a graphics designer",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${mont.variable} ${cormorant.variable}`}>
          <Nav />
        {children}
        </body>
    </html>
  )
}
