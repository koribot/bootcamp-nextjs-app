"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import '@/components/animation/GenerateSquareSpin.scss'
import getRandomColors from './animation/helpers/getRandomColors';
import { useSession } from "next-auth/react"

// const displayOptions = [
//   { displayName: 'Projects', link: '/projects' },
//   { displayName: 'Github', link: 'https://github.com/koribot' },
//   { displayName: 'Socials', link: '/' }
// ];

const Navbar = () => {

  const [backgroundColor, setBackgroundColor] = useState('skeleton')
  const [backgroundColor2, setBackgroundColor2] = useState('#2ec088')
  const [backgroundColor3, setBackgroundColor3] = useState('#ffff')
  const { data: session } = useSession()




  useEffect(() => {
    const color = getRandomColors(100)
    const color2 = getRandomColors(40)
    const color3 = getRandomColors(100)

    setTimeout(() => {
      setBackgroundColor(color)
      setBackgroundColor2(color2)
      setBackgroundColor3(color3)
    }, 500);
  }, [])

  return (
    <nav className='d-flex justify-center width-full bg-skeleton text-white height-sm p-sticky'
      style={{
        background: `linear-gradient(45deg, ${backgroundColor} 25%, ${backgroundColor2} 50%, ${backgroundColor3} 75%)`,
        zIndex: '9999999999999',
      }}>
      <div className='d-flex justify-even align-center gap-sm width-full'>
        <a href='/' className='d-flex gap-10px style-none align-center'>
          <h1> {session?.user.name ? 'Hi' : ''}</h1>
          <Image
            src="/logos/png/logo-white-no-background.png"
            width={100}
            height={40}
            objectfit='contain'
            alt="Picture of the author"
            className='cursor-pointer'
            priority
          />
        </a>

        {/* <ul className='d-flex justify-even align-center gap-50px style-none desktop-flex'>
          {displayOptions.map((option, index) => (
            <a key={index} className='cursor-pointer style-none' target={option.displayName === 'Github' ? '_blank' : ''} href={`${option.link}`}>
              {option.displayName}
            </a>
          ))}
        </ul> */}
      </div>
    </nav >
  )
}

export default Navbar