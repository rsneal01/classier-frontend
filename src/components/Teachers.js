import React from "react";
import TeacherShow from './TeacherShow'


// functional component.  for props we need to pass props as arguments.  functional components are not required to have a render.
const Teachers = (props) => {

    return(
        <div>
           
            {props.teachers.map(teacher => <div key={teacher.id}><TeacherShow teacher={teacher}/></div>)}
        </div>
    )
// mapping over our teachers, creating a TeacherShow component for each teacher, and inside that Show component we render the list of courses
}

export default Teachers