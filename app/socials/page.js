

import FileExplorer from '@/components/fileExplorer/FileExplorer'
import React from 'react'

const page = () => {
    return (
        <>

            <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='Socials' />
            <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='Socials' />
            {/* <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='Socials' x={100} y={55} />
            <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='Socials' x={55} y={75} />
            <FileExplorer content={[{ name: 'Facebook', description: '@Dilaw', link: 'www.facebook.com' }]} title='Socials' x={55} y={56} /> */}
        </>
    )
}

export default page