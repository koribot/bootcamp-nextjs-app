'use client'


import FileExplorer from '@/components/fileExplorer/FileExplorer'
import Modal from '@/components/modal/Modal'
import { retrieveProjects } from '@/services/DB_Requests/GET/retriveProjects'
import React from 'react'
import { useState, useEffect } from 'react'
// const projectLists = [
//     {
//         name: 'eBextractor', description: 'Allows you to extract/scrape Data from ebay and provide pricing insights, I used python with Flask as backend',
//         link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik',
//         repoLink: 'Mock Link',

//         imageLink: 'https://lh3.googleusercontent.com/5DnJ9_nEJtyByOTzjOu2hGWgFp5Jw9KUnSAD8vWcjmwjkd-JpTd6HAdJOmcrA8iabJTNnpjakchO01TE8GnhnYMn=w640-h400-e365-rj-sc0x00ffffff'
//     },
//     {
//         name: 'sample 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ornare quam in ex lacinia, vitae commodo libero rhoncus. Etiam et sem quis lorem ultricies fermentum quis sit amet turpis. Integer vestibulum purus tellus, id viverra libero viverra in. In at arcu ligula. Phasellus varius tortor quam, eget rutrum nulla eleifend at. Pellentesque interdum pulvinar ex vitae porta. Curabitur non nibh justo. Curabitur faucibus molestie malesuada. Aliquam maximus lectus lacus, iaculis ornare erat lacinia id. Integer mollis nisi vel pellentesque porta. Cras id pharetra lorem.',
//         link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik',
//         repoLink: 'Mock Link',

//         imageLink: 'https://lh3.googleusercontent.com/5DnJ9_nEJtyByOTzjOu2hGWgFp5Jw9KUnSAD8vWcjmwjkd-JpTd6HAdJOmcrA8iabJTNnpjakchO01TE8GnhnYMn=w640-h400-e365-rj-sc0x00ffffff'
//     },
//     {
//         name: 'sample 3', description: 'Allows you to extract/scrape Data from ebay and provide pricing insights',
//         link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik',
//         repoLink: 'Mock Link',

//         imageLink: 'https://lh3.googleusercontent.com/5DnJ9_nEJtyByOTzjOu2hGWgFp5Jw9KUnSAD8vWcjmwjkd-JpTd6HAdJOmcrA8iabJTNnpjakchO01TE8GnhnYMn=w640-h400-e365-rj-sc0x00ffffff'
//     },

// ]

const Projects = () => {

    const [fileExplorerContent, setFileExplorerContent] = useState([])
    const [isRootFileExplorer, setIsRootFileExplorer] = useState(true)
    const [projectLists, setProjectLists] = useState([])
    const [modalOpen, setModalOpen] = useState(false);


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


    // async function addProject() {
    //     const postData = {
    //         name: 'eBay HTML Parser',
    //         description: 'parse html of ebay search result and return list of products',
    //         link: 'wcawasa.pythonanywhere.com',
    //         repoLink: 'Mock Link',
    //         imageLink: 'https://lh3.googleusercontent.com/5DnJ9_nEJtyByOTzjOu2hGWgFp5Jw9KUnSAD8vWcjmwjkd-JpTd6HAdJOmcrA8iabJTNnpjakchO01TE8GnhnYMn=w640-h400-e365-rj-sc0x00fffff'
    //     }
    //     try {
    //         const response = await fetch('/api/project', {
    //             method: 'POST', // Specify the HTTP method as GET
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(postData), // Convert the JSON object to a string
    //         });

    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }

    //         const data = await response.json();
    //         console.log(data);
    //         return data;
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //         return null;
    //     }
    // }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const addToProjects = (e) => {
        e.preventDefault();
        setModalOpen(false);
    }


    useEffect(() => {
        const GET = async () => {
            const b = await retrieveProjects()
            setProjectLists(b)

        }
        GET()

    }, [])


    return (
        <>
            {/* initial FileExplorer ---- ROOT */}
            {isRootFileExplorer
                &&
                <FileExplorer content={projectLists}
                    title='projects'
                    openFileExplorer={openFileExplorer}
                    subFolder={false}
                    removeFromArrayOfFileExplorer={removeFromArrayOfFileExplorer}
                    explorerTitle='projects'
                    openModal={openModal}
                />
            }
            <Modal
                isOpen={modalOpen} onClose={closeModal}
                closebutton={false}
                opacity={0.6}
                backgroundColor='#000000'
            >
                <form className='d-flex fd-column gap-10px' onSubmit={addToProjects}>
                    <label>Project Name</label>
                    <input type="text" required={true} className='style-none' />
                    <label>Description</label>
                    <textarea required={true} style={{ height: '100px' }}></textarea>
                    <label>Production Link:</label>
                    <input type="text" required={true} />
                    <label>Repository Link</label>
                    <input type="text" required={true} />
                    <label>Image Link</label>
                    <input type="text" required={true} />
                    <button className='bg-skeleton text-white cursor-pointer' type='submit'>Add Project</button>
                </form>

            </Modal>

            {/* instance of FileExplorer ---- subFolders or sub fileExplorer */}
            {fileExplorerContent.map((content, index) => (
                !content == '' && (
                    <FileExplorer
                        key={index}
                        content={[content]}
                        title={content.name}
                        openFileExplorer={openFileExplorer}
                        subFolder={true}
                        removeFromArrayOfFileExplorer={removeFromArrayOfFileExplorer}
                        index={index}
                        explorerTitle='projects'
                        openModal={openModal}
                    />
                )
            ))}

        </>
    )
}



export default Projects