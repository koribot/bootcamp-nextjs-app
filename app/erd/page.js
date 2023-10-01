// components/ERD.js
import Image from 'next/image';
import React from 'react';

const ERD = () => {
    return (

        <Image
            src='/erd/ERD.png'
            style={{ top: '60px', left: '33%' }}
            className='p-fixed'
            width={600}
            height={600}
            alt='ERD'
            objectfit='contain'

        />
    );
};

export default ERD;