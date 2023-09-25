import React from 'react'

const getRandomPosition = (vh, vw) => {
    const left = `${Math.random() * vw + 10}vw`; // Random left position between 10vw and 90vw
    // console.log(left)
    const top = `${Math.random() * vh + 10}vh`; // Random top position between 10vh and 90vh
    return { left, top };
};

export default getRandomPosition