'use client'

import React, { useState, useEffect } from 'react'
import '@/styles/components/fileExplorer.scss'
import Image from 'next/image'

const FileExplorer = ({ ...data }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 50 });

    const handleMouseDown = (e) => {
        console.log(isDragging)
        const initialX = e.pageX - position.x;
        const initialY = e.pageY - position.y;

        const handleMouseMove = (e) => {
            const newX = e.pageX - initialX;
            const newY = e.pageY - initialY;
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



    return (
        <div className='file-explorer-container'>
            <div
                className='file-explorer'
                draggable='true'
                style={{
                    position: 'relative',
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
                        />
                        <Image
                            src='/icons/minimize.png'
                            width={20}
                            height={20}
                            className='cursor-pointer'
                            alt='okay'
                            objectfit='contain'
                        />
                        <Image
                            src='/icons/maximize.png'
                            width={20}
                            height={20}
                            className='cursor-pointer'
                            alt='okay'
                            objectfit='contain'
                        />
                    </div>
                    <span className='file-title'>{data.title}</span>
                    <Image 
                    src='/icons/add.png'
                    width={20}
                    height={20}
                    className='cursor-pointer p-absolute justify-center'
                    alt='okay'
                    objectfit='contain'
                    />
                </div>
                <div className='folder-container d-flex'>
                    <div className='folder-icon'>
                        {data.content.map((project, index) => (
                            <div key={index}>
                                <Image
                                    src='/icons/folders.png'
                                    width={50}
                                    height={50}
                                    className='cursor-pointer'
                                    alt={project.description}
                                />
                                <p>{project.name}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div >
    )
}


export default FileExplorer