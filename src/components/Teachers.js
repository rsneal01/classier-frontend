import React from "react";

// functional component.  for props we need to pass props as arguments.  functional components are not required to have a render.
const Teachers = (props) => {

    return(
        <div>
            {props.teachers.map(teacher => <li key={teacher.id}>{teacher.name}</li>)}
        </div>
    )

}

export default Teachers