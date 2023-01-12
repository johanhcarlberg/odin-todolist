import PubSub from "./PubSub";

export function getNextId(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr.reduce((previous, item) => {
        const next = previous.id < item.id ? item : previous
        return next;
    }).id + 1;
}

export function publishLink(page, data) {
    PubSub.publish('changePage', {
        page,
        data
    });
}

export function getIndexFromId(arr, id) {
    return todoItems.findIndex(item => item.id === id);
}