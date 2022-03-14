import React from "react";

class CourseForm extends React.Component {

    state = {
        title: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCourse(this.state)
        this.setState({
            name: '',
            title: ''
        })
    }
    // handleSubmit will trigger an action creater to create a new Course in the database, sending state to the action creater addCourse
    // we call setState after submit and reset form value back to empty, to clear form after user submits
    

    render() {
        return (
            <div>
                <form>
                    <label>Course title:</label>
                    <input type='text' placeholder="Title" value='this.state.title' name='title' onChange={this.handleChange} />
                    <br></br>
                    <label>Course description:</label>
                    <input type='text' placeholder="Description" value='this.state.description' name='description' onChange={this.handleChange} />
                </form>
            </div>
        )
    }
// controlled forms have values and names

}

export default connect(null, {addCourse})(CourseForm)

// this component will submit a new course, sent to database, dispatched to redux store to update store
// this means we need connect, so that when we call our creat action it will dispatch to reducer
