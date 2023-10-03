'use client'

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'
import { useState } from 'react'


const socialLists = [
    {
        name: 'Facebook', description: '@Dilaw',
        link: 'https://www.facebook.com/wcawasa/',

    },
    {
        name: 'Instagram', description: '@wcawasa',
        link: 'https://www.instagram.com/wcawasa/',

    },

]
const Socials = () => {

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
                <FileExplorer content={socialLists}
                    title='Socials' openFileExplorer={openFileExplorer}
                    subFolder={false}
                    removeFromArrayOfFileExplorer={removeFromArrayOfFileExplorer}
                    explorerTitle='socials'
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
                        explorerTitle='socials'
                    />
                )
            ))}
        </>
    )
}


export default Socials