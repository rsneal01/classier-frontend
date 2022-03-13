// this component wont directly update or access state, so it can be a functional component.  it will receive state, getting passed down

import React from "react";
import CoursesContainer from '../containers/CoursesContainer'
// import {Redirect} from 'react-router-dom'


const TeacherShow = (props) => {
    let teacher = props.teachers[props.match.params.id -1]
    // using URL to match specific account (using routerProps)
    return (
        <div>
            <h2>
                {teacher ? teacher.name : null}
            </h2>
            <CoursesContainer/>
        </div>
    // if teacher exists, render name, otherwise null
    )
}

export default TeacherShow