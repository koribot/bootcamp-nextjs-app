import Image from 'next/image'
import React from 'react'
import FileExplorer from '../fileExplorer/FileExplorer'

const Folders = ({ projectData }) => {

    const handleClick = (project) => {
        projectData.openFolder(project)
    }

    return (
        <div>
            {projectData.content.map((project, index) => (
                !projectData.subFolder ?
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