export function fetchTeachers() {
    return (dispatch) => {
    fetch('http://127.0.0.1:3000/api/v1/teachers')
      .then(response => response.json())
      .then(data => dispatch({
          type: 'FETCH_TEACHERS', 
          payload: data
      }))
    }
}




// creates action object to be dispatched to reducer
// thunk allows us to use dispatch inside an action creater. this fetch request needs to finish BEFORE we dispatch an action to our reducer.  
// without thunk, connect would automatically dispatch the action, not giving this fetch request time to complete