'use client'

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'
import { useState } from 'react'
const page = () => {

    const [fileExplorerContent, setFileExplorerContent] = useState([])

    const openFileExplorer = (socialData) => {
        // if (!fileExplorerContent.some((content) => content.name === socialData.name)) {
        setFileExplorerContent((prevContentArray) => [...prevContentArray, socialData]);
        // }
    }

    return (
        <>
            <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='Socials' openFileExplorer={openFileExplorer} subFolder={false} />
            {fileExplorerContent.map((content, index) => (
                <FileExplorer key={index} content={[content]} title={content.name} openFileExplorer={openFileExplorer} subFolder={true} />
            ))}
        </>
    )
}


export default page