'use client'

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'
import { useState } from 'react'
const projectList = [
    { name: 'eBextractor', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' },
    { name: 'sample2', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' },
    { name: 'sample3', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' }
]


const Projects = () => {

    const [folderContent, setFolderContent] = useState([])

    const openFolder = (projectData) => {
        setFolderContent((prevContentArray) => [...prevContentArray, projectData])
    }
    return (
        <>
            <FileExplorer content={projectList} title='project' openFolder={openFolder} subFolder={false} />
            {folderContent.map((content, index) => (
                <FileExplorer key={index} content={[content]} title={content.name} openFolder={openFolder} subFolder={true} />
            ))}
        </>
    )
}



export default Projects