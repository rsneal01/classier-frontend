export const addCourse = (course, teacherId) => {


    return (dispatch) => {
        fetch(`http://127.0.0.1:3000/api/v1/teachers/${teacherId}/courses`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(course)
        })
        .then(response => response.json())
        .then(teacher => dispatch({type: 'ADD_COURSE', payload: teacher}))
        // dispatch requires a type attribute and payload attribute
        // we change our backend here, courses/create, to render @teacher.  this way when we create a new course we dont have to search through teachers
        // to find the right teacher

}

}
// dispatch to reducer to update store