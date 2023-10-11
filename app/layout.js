
import '@/styles/global.scss'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import GenerateShapeSpin from '@/components/animation/GenerateShapeSpin'
import Dock from '@/components/dock/Dock'
import FileExplorer from '@/components/fileExplorer/FileExplorer'
import Provider from "@/components/context/client-provider"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Login_Logout from '../components/login_logout_button/Login_Logout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Walid Profile',
  description: 'Nextjs - Web Developer by Walid Cawasa',
  icons: {
    icon: '/icon.ico',
  },
}



export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

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
        <Provider session={session}>
          <Navbar />
          {children}
          <section>
            <GenerateShapeSpin
              length={200}
              typeOfElement='span'
              shape='random'
              vw={75}
              vh={60}
              maxBrightness={500}
              opacity={10}
            />
          </section>
          <Dock />
          <Login_Logout />
        </Provider>
      </body>
    </html>
  )
}
