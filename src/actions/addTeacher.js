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

}

}
// thunk allows us to bring dispatch into this function, so that we can dispatch to our reducer