export const unslugify = (slug) => {
    return slug.replace(/-/g, ' ');
}

export const capitalizeFirstLetter = (inputString) => {
    if (typeof inputString !== 'string' || inputString.length === 0) {
        return inputString;
    }

    const firstLetter = inputString[0].toUpperCase();
    const restOfTheString = inputString.slice(1);

    return firstLetter + restOfTheString;
}