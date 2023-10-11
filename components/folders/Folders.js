import Image from 'next/image'
import React from 'react'
import FileExplorer from '../fileExplorer/FileExplorer'
import '@/styles/components/folder.scss'
import { useSession } from "next-auth/react"
import Modal from '../modal/Modal'

const Folders = ({ contentData }) => {
	const { data: session } = useSession()

	const handleClick = (data) => {
		// console.log(data)
		contentData.openFileExplorer(data)
	}
	const mockChange = () => {

	}

	const handleDelete = (data) => {
		contentData.handleDeleteProject(data)
	}

	return (
		<div className='folder-container'>
			<div className={`${!contentData.subFolder ? 'grid-container' : 'flex-container'}`}>
				{contentData.content.map((data, index) => (
					!contentData.subFolder ?
						<div className='p-relative' key={index}>
							<Image
								src='/icons/folders.png'
								width={50}
								height={50}
								className='cursor-pointer'
								alt={data.description}
								onClick={() => handleClick(data)}
							/>
							{session !== null &&
								<Image
									src='/icons/delete.png'
									width={20}
									height={20}
									className='delete-project cursor-pointer'
									alt='okay'
									objectfit='contain'
									style={{ display: data.subFolder ? 'none' : 'block' }}
									onClick={() => handleDelete(data)}
								/>
							}
							<p>{data.name}</p>
						</div>
						:
						<div key={index}>
							<div key={index} className='data-item'>
								<p className='data-name'>{data.name}</p>
								{contentData.explorerTitle === 'projects' ?
									<>
										<textarea style={{ resize: 'vertical', width: '100%' }} key={index} className='data-description' value={data.description} onChange={mockChange} />
										<a href={data.link} target='_blank' className='data-link text-black'><h4>Project Link</h4></a>
										<a href={data.repoLink} target='_blank' className='data-link text-black'><h4>Repo Link</h4></a>
										<a href={data.imageLink} target='_blank' className='data-link text-black'><h4>View Image</h4></a>
									</>
									:
									<>
										<a href={data.link} target='_blank' className='style-none'>{data.description}</a>
									</>
								}


							</div>
							{/* <Image src={data.imageLink} alt={data.name} width={200} height={200} objectFit='fill' /> */}
						</div>

				))}

			</div>
			<Modal
				closebutton={true}
				isOpen={false}
				backgroundColor='#000000'
				opacity={1}
			>
				<h2>Are you sure you want to Delete this?</h2>
			</Modal>
		</div>
	)
}

export default Folders