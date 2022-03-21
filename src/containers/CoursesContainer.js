import React from "react";
import CourseForm from '../components/CourseForm'
import Courses from "../components/Courses";

class CoursesContainer extends React.Component {

    render() {
        return( 
            <div>
                <CourseForm teacher={this.props.teacher}/>
                <Courses courses={this.props.teacher && this.props.teacher.courses} />
            </div>
            // using && ternary operator to check if this.props.teacher exists
            // Courses container receives teacher prop from TeacherShow, passes down props down CourseForm and Courses components
        )
    }

}

export default CoursesContainer
// Containers often use state, so we use class component