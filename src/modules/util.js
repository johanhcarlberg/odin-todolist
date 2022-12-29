export function getNextId(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr.reduce((previous, item) => {
        const next = previous.id < item.value ? item : previous
        return next;
    }).id + 1;
}