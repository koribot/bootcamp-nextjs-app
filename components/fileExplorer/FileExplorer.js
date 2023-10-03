'use client'
import React, { useState, useEffect, useRef } from 'react'
import '@/styles/components/fileExplorer.scss'
import Image from 'next/image'
import Folders from '../folders/Folders'



const FileExplorer = ({ ...data }) => {

    const fileExplorerReference = useRef(null);
    const [windowSize, setWindowSize] = useState({
        responsiveWidth: undefined,
        responsiveHeight: undefined

    })
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: data.x ? data.x : (windowSize.responsiveWidth / 2) - 150, y: data.y ? data.y : (windowSize.responsiveHeight / 2) - 250 });

    const handleMouseDown = (e) => {
        const rect = e.target.getBoundingClientRect();
        const initialX = e.clientX - rect.left;
        const initialY = e.clientY - rect.top;


        const handleMouseMove = (e) => {
            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;
            setPosition({ x: newX, y: newY });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const closeFileExplorer = () => {
        // fileExplorerReference.current.style.display = 'none'
        data.removeFromArrayOfFileExplorer(data)
    }

    const maximizeExplorer = () => {
        // console.log(windowSize.responsiveWidth)
        if (typeof window !== undefined) {
            fileExplorerReference.current.style.width = `${windowSize.responsiveWidth - 50}px`
            fileExplorerReference.current.style.height = `${windowSize.responsiveHeight - 300}px`
        }
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            if (data.subFolder) {
                setPosition({
                    x: fileExplorerReference.current.getBoundingClientRect().left + 20, // Set to previous x position
                    y: fileExplorerReference.current.getBoundingClientRect().top + 25, // Set to previous y position
                });
            }
            setWindowSize({
                responsiveWidth: window.innerWidth,
                responsiveHeight: window.innerHeight
            })

        }
    }, [])

    return (
        <div className='file-explorer-container'>
            <div
                className='file-explorer'
                ref={fileExplorerReference}
                draggable='true'
                style={{
                    position: 'fixed',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    cursor: isDragging ? 'grabbing' : 'grab',
                }}
                onDragStart={
                    handleMouseDown
                }
            >

                <div className='file-top-section'>
                    <div className='d-flex p-absolute gap-sm justify-start align-center fd-row'>
                        <Image
                            src='/icons/close.png'
                            width={20}
                            height={20}
                            className='cursor-pointer'
                            alt='okay'
                            objectfit='contain'
                            onClick={closeFileExplorer}
                            style={{ zIndex: '999999999' }}
                        />
                        <Image
                            src='/icons/minimize.png'
                            width={20}
                            height={20}
                            className='cursor-pointer'
                            alt='okay'
                            objectfit='contain'
                            style={{ zIndex: '999999999' }}
                        />
                        <Image
                            src='/icons/maximize.png'
                            width={20}
                            height={20}
                            className='cursor-pointer'
                            alt='okay'
                            objectfit='contain'
                            style={{ zIndex: '999999999' }}
                            onClick={maximizeExplorer}
                        />
                    </div>
                    <span className='file-title'>{data.title}</span>
                    <Image
                        src='/icons/add.png'
                        width={20}
                        height={20}
                        className='add-project cursor-pointer p-absolute justify-center'
                        alt='okay'
                        objectfit='contain'
                        style={{ display: data.subFolder ? 'none' : 'block' }}
                    />
                </div>
                {/* <div className='folder-container d-flex'>
                    <div className='folder-icon'> */}

                <Folders contentData={data} />
                {/* </div>
                </div> */}
            </div>
        </div >
    )
}


export default FileExplorer