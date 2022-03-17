export const deleteCourse = (courseId, teacherId) => {

    return dispatch => {
        fetch(`http://127.0.0.1:3000/api/v1/teachers/${teacherId}/courses/${courseId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(teacher => dispatch({type: 'DELETE_COURSE', payload: teacher}))
    }

}

// we dont need to send body in this request, because we are just deleting
// body is necessary for create/update, because we are sending new information