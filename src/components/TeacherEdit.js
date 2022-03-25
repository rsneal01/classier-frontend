import React from "react";
import { connect } from "react-redux";
import { editTeacher } from "../actions/editTeacher";

// class component for controlled form.  if props are being passed we can call this.props

class TeacherEdit extends React.Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
            // event.target.name will read the 'name' input and set the value to a key that points to value of event.target.value
            // which is what has been inputted by user
        })
    }
    // handleChange will update state as soon as text is changed in the input

    handleSubmit = (event) => {
        event.preventDefault()
        let teacher = {...this.state, id: this.props.teacher.id}
        this.props.editTeacher(teacher)
        this.setState({
            name: ''
        })
    }
    // handleSubmit will trigger an action creater to create a new Teacher in the database, sending state to the action creater addTeacher
    // we call setState after submit and reset form value back to empty, to clear form after user submits

    render() {
        return(
            <div>
                <h3>Edit teacher name:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Teacher Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}  /><br></br>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}
// controlled form: values are held in state. need handleCHange to update, and handleSubmit to send state to ADD_TEACHER action creator.  


export default connect(null, {editTeacher})(TeacherEdit);
// this component is only concerned about adding/updating Teachers, so doesnt need mapStateToProps.
// we use connect so that we can call this.props.addTeacher, and so that we can dispatch to our reducer