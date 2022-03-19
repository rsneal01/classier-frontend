import React from "react";
import { Card } from "react-bootstrap";
import {Route, Link} from 'react-router-dom'
// import TeacherShow from './TeacherShow'


// functional component.  for props we need to pass props as arguments.  functional components are not required to have a render.
const Teachers = (props) => {

    // return(
    //     <div>
    //         {props.teachers.map(teacher => <li key={teacher.id}>
    //             <Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>
    //         </li> )}
    //     </div>
    // )
// mapping over our teachers, creating a list of links for each teacher, 

return(
    <div>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Our Teachers:</Card.Title>
            <Card.Text>
                {props.teachers.map(teacher => <li key={teacher.id}>
                    <Link to={`/teachers/${teacher.id}`}>{teacher.name}</Link>
                </li> )}
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
)
}




export default Teachers