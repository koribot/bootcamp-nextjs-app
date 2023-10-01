'use client'

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'
import { useState } from 'react'
const page = () => {

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

        console.log(fileExplorerContent)
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
                <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]}
                    title='Socials' openFileExplorer={openFileExplorer}
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


export default page