"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import '../components/animation/GenerateSquareSpin.scss'
import getRandomColors from './animation/helpers/getRandomColors';

// const displayOptions = [
//   { displayName: 'Projects', link: '/projects' },
//   { displayName: 'Github', link: 'https://github.com/koribot' },
//   { displayName: 'Socials', link: '/' }
// ];

const colorList = [
  'green',
  'blue',
  'gray',
]

const Navbar = () => {

  const [backgroundColor, setBackgroundColor] = useState('skeleton')

  useEffect(() => {
    const color = getRandomColors(100)
    let randomColorIndex = Math.floor(Math.random() * colorList.length)
    setBackgroundColor(color)
    console.log(backgroundColor)
    // return(()=>{

    // })

  }, [])

  return (
    <nav className='d-flex justify-center width-full bg-skeleton bg-green text-white height-sm p-sticky' style={{ background: backgroundColor, zIndex: '9999999999999' }}>
      <div className='d-flex justify-even align-center gap-sm width-full'>
        <a href='/'>
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