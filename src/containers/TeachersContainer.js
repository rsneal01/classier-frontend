import React from 'react'
import TeacherForm from '../components/TeacherForm';
import Teachers from '../components/Teachers';
import {connect} from 'react-redux'
import { fetchTeachers } from '../actions/fetchTeachers';

// fetch teachers from backend, add them to redux store, map them to props, use those teachers in container

class TeachersContainer extends React.Component {

    componentDidMount(){
        this.props.fetchTeachers()
    }


    render() {
        return(
            <div>
                <TeacherForm />
                <Teachers teachers={this.props.teachers}/>
            </div>
            // sends teachers down to Teachers component
        )
    }
}
// 


const mapStateToProps = state => {
    return {
        teachers: state.teachers
    }
}
// give this component, access through props, to the teachers in our store
// to see our data we use mapStateToProps (vs dispatch).  get redux store and map it as props


export default connect(mapStateToProps, {fetchTeachers})(TeachersContainer);

// fetchTeachers is equivalent to mapDispatchToProps
// connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store, 
// and the functions it can use to dispatch actions to the store.
// It does not modify the component class passed to it; instead, it returns a new, 
// connected component class that wraps the component you passed in.
