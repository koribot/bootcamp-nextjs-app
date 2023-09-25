const getRandomColors = (maxBrightness) => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    let brightness = 0;

    do {
        // Generate a random color
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        // Calculate the brightness of the color
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        brightness = (r * 299 + g * 587 + b * 114) / 1000;

    } while (brightness >= maxBrightness);

    return color;
}


export default getRandomColors