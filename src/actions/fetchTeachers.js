export function fetchTeachers() {
    fetch('http://127.0.0.1:3000/api/v1/teachers')
      .then(response => response.json())
      .then(data => console.log(data))
}


// creates action object to be dispatched to reducer
// thunk allows this fetch request to finish BEFORE we dispatch an action to our reducer.  without thunk reducer would fire immediately, not giving this fetch request time to complete