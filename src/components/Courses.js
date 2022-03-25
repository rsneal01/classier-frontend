import React from "react";
import { connect } from "react-redux";
import { deleteCourse } from "../actions/deleteCourse";

const Courses = (props) => {

const handleDelete = (course) => {
    props.deleteCourse(course.id, course.teacher_id)
}

// because this is a functional component, we define our handleDelete with const keyword
// we send props with props, NOT this.props

return (
    <div>
        <h3>Delete a course:</h3>
        {props.courses && props.courses.map(course => 
            <li key={course.id}>{course.title} - {course.description}<button onClick={() => handleDelete(course)}>Delete Course</button></li>
            )}
            <br></br>
            <br></br>
    </div>
    // check to see if props.courses is defined, if true go on to map over courses and return each title and descript
    // first time props comes through may be undefined (this can happen if visiting URL directly rather than through links)
    // onClick handleDelete needs to 
)

}

export default connect(null, {deleteCourse})(Courses)
// export default Courses