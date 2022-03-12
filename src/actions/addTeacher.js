export const addTeacher = (data) => {


    return (dispatch) => {
        fetch('http://127.0.0.1:3000/api/v1/teachers', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(teacher => dispatch({type: 'ADD_TEACHER', payload: teacher}))
        // dispatch requires a type attribute and payload attribute

}

}
// thunk allows us to bring dispatch into this function, so that we can dispatch to our reducer
// this action makes a post request to back end, create a new teacher, and dispatch it with type 'ADD_TEACHER' to our reducer.
