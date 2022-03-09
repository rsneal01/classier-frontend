import React from 'react'
import TeacherForm from '../components/TeacherForm';
import Teachers from '../components/Teachers';
import {connect} from 'react-redux'

// fetch teachers from backend, add them to redux store, use those teachers in container
class TeachersContainer extends React.Component {

    componentDidMount(){
        
    }

    render() {
        return(
            <div>
                <TeacherForm />
                <Teachers />
            </div>
        )
    }
}

// to see our data we use mapStateToProps (vs dispatch).  get redux store and map it as props

const mapStateToProps = state => {
    // give this component, access through props, to the teachers in our state
    return {
        teachers: state.teachers
    }
}

export default connect(mapStateToProps)(TeachersContainer);
