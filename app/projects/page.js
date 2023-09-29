'use client'

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'
import { useState, useEffect } from 'react'
const projectList = [
    { name: 'eBextractor', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' },
    { name: 'Example', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' },
    { name: 'sample3', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' }
]


const Projects = () => {

    const [fileExplorerContent, setFileExplorerContent] = useState([])

    const openFileExplorer = (projectData) => {

        // if (!fileExplorerContent.some((content) => content.name === projectData.name)) {
        setFileExplorerContent((prevContentArray) => [...prevContentArray, projectData]);
        // }
    }



    // const removeFromArrayOfFileExplorer = (projectDataToRemove) => {
    //     // console.log(fileExplorerContent)
    //     const updatedContentArray = [];
    //     for (const projectData of fileExplorerContent) {
    //         if (projectData.name !== projectDataToRemove[0].name) {
    //             updatedContentArray.push(projectData);
    //         }
    //     }
    //     setFileExplorerContent(updatedContentArray);
    //     // setTimeout(() => {
    //     //     console.log(fileExplorerContent.map((contnet) => {
    //     //         contnet.name
    //     //     }))
    //     // }, 2000);

    // };
    return (
        <>
            <FileExplorer content={projectList} title='project' openFileExplorer={openFileExplorer} subFolder={false} />
            {/* {fileExplorerContent.map((contnet) => {
                console.log(contnet.name)
            })} */}
            {fileExplorerContent.map((content, index) => (
                <FileExplorer key={index} content={[content]} title={content.name} openFileExplorer={openFileExplorer} subFolder={true} />
            ))}
        </>
    )
}



export default Projects