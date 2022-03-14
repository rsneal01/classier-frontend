import React from "react";

const Courses = (props) => {

return (
    <div>
        {props.courses && props.courses.map(course => 
            <li key={course.id}>{course.title} - {course.description}</li>
            )}
    </div>
    // check to see if props.courses is defined, if true go on to map over courses and return each title and descript
    // first time props comes through may be undefined (this can happen if visiting URL directly rather than through links)
)

}

export default Courses