export const toggleMemorized = (id) => {
    return {
        type: 'TOGGLE_MEMORIZED',
        id
    }
}

export const toggleShow = (id) => {
    return {
        type: 'TOGGLE_SHOW',
        id
    }
}

export const addWord = (en, vn) => {
    return {
        type: 'ADD_WORD',
        en,
        vn
    }
}

export const removeWord = (id) => {
    return {
        type: 'REMOVE_WORD',
        id
    }
}