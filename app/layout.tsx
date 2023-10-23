import '@styles/globals.css';
import { Lato, Montserrat, Cormorant } from 'next/font/google';
import { createClient, repositoryName } from '@prismicio';
import { Metadata } from 'next';
import { PrismicPreview } from '@prismicio/next';

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
  const client = createClient();

  const settings = await client.getSingle("settings");
 
  return {
    title: settings.data.site_title || "Avatar Bmb",
    description: settings.data.meta_description || "A portfolio website for a graphics designer",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${mont.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <PrismicPreview repositoryName={repositoryName}/>
        </body>
    </html>
  );
}
