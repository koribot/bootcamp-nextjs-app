import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'

const projectList = [
    { name: 'eBextractor', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' },
    { name: 'sample2', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' },
    { name: 'sample3', description: 'Allows you to extract Data from ebay and provide pricing insights', link: 'https://chrome.google.com/webstore/detail/ebextractor-ebay-extracto/ikfpolbfdnihjnadfodochmagdagpbik' }
]

const Projects = () => {
    return (

        <FileExplorer content={projectList} title='project' />

    )
}

export default Projects