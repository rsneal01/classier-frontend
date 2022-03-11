export default function teacherReducer(state = {teachers: []}, action) {

    switch (action.type) {
    case 'FETCH_TEACHERS': 
        return {teachers: action.payload}
    default: 
        return state
    }

}

// receives actions to be used in creating new state with data from our fetch
// goal is to return a state object with a teachers key that points to array of tachers
// reducer is used to update store