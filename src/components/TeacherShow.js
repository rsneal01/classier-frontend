// this component wont directly update or access state, so it can be a functional component.  it will receive state, getting passed down

import React from "react";

const TeacherShow = (props) => {
    let teacher = props.teachers[props.match.params.id -1]
    return (
        <li>
            {props.teacher.name}
        </li>
    )
}

export default TeacherShow