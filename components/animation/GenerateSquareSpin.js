'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import '../animation/GenerateSquareSpin.scss'
import generateElement from './helpers/generateElement';

function GenerateSquareSpin({ length = 1, typeOfElement = 'span', shape = 'circle', vw = '70', vh = '70' }) {
    // Initialize state to store generated elements
    const [generatedElements, setGeneratedElements] = useState([]);

    useEffect(() => {
        const newElement = generateElement(length, typeOfElement, shape, vw, vh)
        setGeneratedElements(newElement)
    }, []);

    return (
        <>

            {generatedElements.map((element, index) => (
                <React.Fragment key={index}>{element}</React.Fragment>
            ))}
            <div>

            </div>
        </>
    );
}

export default GenerateSquareSpin;


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
