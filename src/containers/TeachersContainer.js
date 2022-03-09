import React from 'react'
import TeacherForm from '../components/TeacherForm';
import Teachers from '../components/Teachers';
import {connect} from 'react-redux'

// fetch teachers from backend, add them to redux store, use those teachers in container
class TeachersContainer extends React.Component {

    render() {
        return(
            <div>
                <TeacherForm />
                <Teachers />
            </div>
        )
    }
}

export default connect()(TeachersContainer);
