
import '@/styles/global.scss'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import GenerateShapeSpin from '@/components/animation/GenerateShapeSpin'
import Dock from '@/components/dock/Dock'
import FileExplorer from '@/components/fileExplorer/FileExplorer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Walid Profile',
  description: 'Generated by create next app',
  icons: {
    icon: '/icon.ico',
  },
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.ico"
          type="image/ico"
          sizes="48x48"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <section>
          <GenerateShapeSpin
            length={200}
            typeOfElement='span'
            shape='random'
            vw={70}
            vh={60}
            maxBrightness={500}
            opacity={35}
          />
        </section>
        <Dock />
      </body>
    </html>
  )
}
