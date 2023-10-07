'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../animation/GenerateSquareSpin.scss'
import generateElement from './helpers/generateElement';
import { useRouter, usePathname } from 'next/navigation';

function GenerateShapeSpin({ length = 1, typeOfElement = 'span', shape = 'circle', vw = '70', vh = '70', maxBrightness = 0 }) { // assigning default values
    // Initialize state to store generated elements
    const [generatedElements, setGeneratedElements] = useState([]);
    const pathname = usePathname().slice(1)


    useEffect(() => {
        const newElement = generateElement(length, typeOfElement, shape, vw, vh, maxBrightness)
        setGeneratedElements(newElement)
        console.log(pathname)
    }, []);

    return (
        <div style={{ display: pathname === 'about-me' ? 'none' : 'block' }}>
            {generatedElements.map((element, index) => (
                element
            ))}
        </div>
    );
}

export default GenerateShapeSpin;


// 'use client'
// import React, { useState, useEffect } from 'react';
// import '../animation/GenerateSquareSpin.scss'


// const GenerateSquareSpin = ({ length, animationName }) => {
//     const [squares, setSquares] = useState([]);

//     const getRandomPosition = () => {
//         const left = `${Math.random() * 80 + 10}vw`; // Random left position between 10vw and 90vw
//         const top = `${Math.random() * 80 + 10}vh`; // Random top position between 10vh and 90vh
//         return { left, top };
//     };

//     const gerRandomColors = () => {
//         const letters = '0123456789ABCDEF';
//         let color = '#';
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }

//     // Function to create an array of square elements with random positions
//     const generateSquares = () => {

//         const squaresArray = [];

//         for (let i = 0; i < length; i++) {
//             const position = getRandomPosition();
//             squaresArray.push(position);
//             const color = gerRandomColors()
//             console.log(color)
//             squaresArray.push(color)
//         }

//         setSquares(squaresArray);
//     };

//     useEffect(() => {
//         console.log('rendered')
//         generateSquares();
//     }, []); // Call generateSquares on initial render

//     return (
//         <div>
//             {squares.map((position, index) => (
//                 <span
//                     key={index}
//                     className={`${animationName}`}
//                     style={{ left: position.left, top: position.top, borderColor: position.color }}
//                 ></span>
//             ))}
//         </div>
//     );
// }




// export default GenerateSquareSpin;
