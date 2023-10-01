import Image from 'next/image'
import React from 'react'
import FileExplorer from '../fileExplorer/FileExplorer'
import '@/styles/components/folder.scss'

const Folders = ({ contentData }) => {

    const handleClick = (project) => {
        // console.log(project)
        contentData.openFileExplorer(project)
    }

    return (
        <div className='grid-container'>
            {contentData.content.map((project, index) => (
                !contentData.subFolder ?
                    <div key={index} onClick={() => handleClick(project)}>
                        <Image
                            src='/icons/folders.png'
                            width={50}
                            height={50}
                            className='cursor-pointer'
                            alt={project.description}
                        />
                        <p>{project.name}</p>
                    </div>
                    :
                    <div key={index}>{project.name}</div>


            ))}

        </div>
    )
}

export default Folders