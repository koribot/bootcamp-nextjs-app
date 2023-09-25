

const getRandomShape = () => {
    const shapeList = ['circle', 'square', 'rectangle', 'hexagon']
    const randomShapeIndex = Math.floor(Math.random() * shapeList.length)
    console.log(randomShapeIndex)
    const shape = shapeList[randomShapeIndex]
    return shape
}

export default getRandomShape