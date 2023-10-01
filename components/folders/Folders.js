import Image from 'next/image'
import React from 'react'
import FileExplorer from '../fileExplorer/FileExplorer'
import '@/styles/components/folder.scss'

const Folders = ({ contentData }) => {

    const handleClick = (data) => {
        // console.log(data)
        contentData.openFileExplorer(data)
    }

    return (
        <div className='grid-container'>
            {contentData.content.map((data, index) => (
                !contentData.subFolder ?
                    <div key={index} onClick={() => handleClick(data)}>
                        <Image
                            src='/icons/folders.png'
                            width={50}
                            height={50}
                            className='cursor-pointer'
                            alt={data.description}
                        />
                        <p>{data.name}</p>
                    </div>
                    :
                    <div key={index}>{data.name}</div>


            ))}

        </div>
    )
}

export default Folders