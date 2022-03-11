export default function teacherReducer(state = {teachers: []}, action) {

    switch (action.type) {
    case 'FETCH_TEACHERS': 
        return {teachers: action.payload}
    case 'ADD_TEACHER':
        return {...state, teachers: [...state.teachers, action.payload]}
        // setting case to ADD_TEACHER allows us to dispatch to this reducer from addTeacher action.
        // using spread operator here returns the previous state and previous teachers, while also adding the new teacher through action.payload
    default: 
        return state
    }

}

// receives actions to be used in creating new state with data from our fetch
// goal is to return a state object with a teachers key that points to array of tachers
// reducer is used to update store