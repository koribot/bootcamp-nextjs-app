'use client'

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'
import { useState } from 'react'
const page = () => {

    const [folderContent, setFolderContent] = useState([])

    const openFolder = (projectData) => {
        setFolderContent((prevContentArray) => [...prevContentArray, projectData])
    }
    return (
        <>
            <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='project' openFolder={openFolder} subFolder={false} />
            {folderContent.map((content, index) => (
                <FileExplorer key={index} content={[content]} title={content.name} openFolder={openFolder} subFolder={true} />
            ))}
        </>
    )
}


export default page