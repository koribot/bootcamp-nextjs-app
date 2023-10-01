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
    const [isRootFileExplorer, setIsRootFileExplorer] = useState(true)


    const openFileExplorer = (data) => {
        if (!fileExplorerContent.some((content) => content.name === data.name)) {
            setFileExplorerContent((prevContentArray) => {
                const updatedContentArray = [...prevContentArray];
                const emptySlotIndex = updatedContentArray.indexOf('');
                if (emptySlotIndex !== -1) {
                    updatedContentArray[emptySlotIndex] = data;

                } else {
                    updatedContentArray.push(data);
                }
                return updatedContentArray;
            });
        }

    };



    const removeFromArrayOfFileExplorer = (dataToRemove) => {
        if (dataToRemove.subFolder === false) {
            setIsRootFileExplorer(!isRootFileExplorer)
        }

        setFileExplorerContent((prevContentArray) => {
            const updatedContentArray = [...prevContentArray];
            updatedContentArray[dataToRemove.index] = ''; // Set to null or an empty string as desired
            return updatedContentArray;
        });
    };


    return (
        <>
            {isRootFileExplorer
                &&
                <FileExplorer content={projectList}
                    title='project'
                    openFileExplorer={openFileExplorer}
                    subFolder={false}
                    removeFromArrayOfFileExplorer={removeFromArrayOfFileExplorer}
                />
            }
            {fileExplorerContent.map((content, index) => (
                // Check if content is not null before rendering FileExplorer
                !content == '' && (
                    <FileExplorer
                        key={index}
                        content={[content]}
                        title={content.name}
                        openFileExplorer={openFileExplorer}
                        subFolder={true}
                        removeFromArrayOfFileExplorer={removeFromArrayOfFileExplorer}
                        index={index}
                    />
                )
            ))}

        </>
    )
}



export default Projects