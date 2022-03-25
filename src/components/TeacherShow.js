// this component wont directly update or access state, so it can be a functional component.  it will receive state, getting passed down

import React from "react";
import CoursesContainer from '../containers/CoursesContainer'
import TeacherEdit from "./TeacherEdit";
import { Link, useParams } from 'react-router-dom';


const TeacherShow = (props) => {
    const id  = useParams();
    const teacher = props.teachers.find((t) => t.id === Number(id.id));
    // let teacher = props.teachers[props.match.params.id - 1]
    // using URL to match specific account (using routerProps)
    return (
        <div>
            <h2>
                {teacher ? teacher.name : null}
            </h2>
            <br></br>
            <CoursesContainer teacher={teacher}/>
            <TeacherEdit teacher={teacher}/>
        </div>
    // if teacher exists, render name, otherwise null
    )
}
// Teacher show page will render a CoursesContainer for every teacher page we go to.
// we pass teacher prop down to CoursesContainer here

export default TeacherShow