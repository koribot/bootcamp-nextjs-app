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
        <div className='folder-container'>
            <div className={`${!contentData.subFolder ? 'grid-container' : 'flex-container'}`}>
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
                        <div key={index}>
                            <div key={index} className='data-item'>
                                <p className='data-name'>{data.name}</p>
                                {contentData.explorerTitle === 'projects' ?
                                    <>
                                        <span key={index} className='data-description' >{data.description}</span>
                                        <a href={data.link} target='_blank' className='data-link style-none'><h4>Project Link</h4>{data.link}</a>
                                        <a href={data.repoLink} target='_blank' className='data-link style-none'><h4>Repo Link</h4>{data.repoLink}</a>
                                        <a href={data.imageLink} target='_blank' >View Image</a>
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
        </div>
    )
}

export default Folders