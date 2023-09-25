'use client'

import React from 'react'
import '@/styles/components/fileExplorer.scss'
import Image from 'next/image'

const FileExplorer = ({ ...data }) => {
    return (
        <div className='file-explorer-container'>
            <div className='file-explorer' draggable='true'>
                <div className='file-top-section'>
                    <Image
                        src='/icons/close.png'
                        width={30}
                        height={30}
                        className='p-absolute cursor-pointer'
                        alt='okay'
                    />
                    <span className='file-title'>{data.title}</span>
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
        </div>
    )
}


export default FileExplorer