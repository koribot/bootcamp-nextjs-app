import '@/styles/global.scss'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import GenerateShapeSpin from '@/components/animation/GenerateShapeSpin'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Walid Profile',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <section>
          <GenerateShapeSpin length={150} typeOfElement='span' shape='square' vw='80' vh='80' maxBrightness='100' />
        </section>
      </body>
    </html>
  )
}
