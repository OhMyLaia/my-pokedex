export const getPredominantType = (types?: { type: { name: string } }[]) => {
    if (!types || types.length === 0) {
        return "rgb(255, 255, 255)";
    }
    // else {
    //     return types[0].type.name
    // }

    return types.length > 1
        ? types[1].type.name === "normal"
            ? types[0].type.name
            : types[1].type.name
            : types[0].type.name;
}
