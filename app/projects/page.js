'use client'


import FileExplorer from '@/components/fileExplorer/FileExplorer'
import Modal from '@/components/modal/Modal'
import ProjectForm from '@/components/projectForm/ProjectForm'
import { retriveProjectRequest } from '@/services/DB_Requests/GET/retriveProjectRequest'
import React from 'react'
import { useState, useEffect } from 'react'
import { deleteProjectRequest } from '@/services/DB_Requests/Delete/deleteProjectRequest';


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



	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);

	};

	const handleDeleteProject = async (data) => {
		const id = data.id
		await deleteProjectRequest(id)
		// window.location.reload()
	}

	useEffect(() => {
		const GET = async () => {
			const b = await retriveProjectRequest()
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
					handleDeleteProject={handleDeleteProject}
				/>
			}
			<Modal
				isOpen={modalOpen} onClose={closeModal}
				closebutton={true}
				opacity={0.6}
				backgroundColor='#000000'
			>
				<ProjectForm closeModal={closeModal} />

			</Modal>

			{/* instance of FileExplorer ---- subFolders or sub fileExplorer */}
			{fileExplorerContent?.map((content, index) => (
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