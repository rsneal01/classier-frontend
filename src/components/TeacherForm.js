import React from "react";
import { connect } from "react-redux";
import { addTeacher } from "../actions/addTeacher";

// class component for controlled form.  if props are being passed we can call this.props

class TeacherForm extends React.Component {

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
        this.props.addTeacher(this.state)
    }
    // handleSubmit will trigger an action creater to create a new Teacher in the database, sending state to the action creater addTeacher

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Teacher Name:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}  /><br></br>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addTeacher})(TeacherForm);
// this component is only concerned about adding/updating Teachers, so doesnt need mapStateToProps