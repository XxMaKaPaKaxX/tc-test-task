export const sortByLastName = (a, b) => {
    const aLastName = a.last_name.toLowerCase();
    const bLastName = b.last_name.toLowerCase();
    if (aLastName > bLastName) {
        return 1;
    }
    if (bLastName > aLastName) {
        return -1;
    }
    return 0;
}