import React from 'react'
import TeacherForm from '../components/TeacherForm';
import Teachers from '../components/Teachers';
import {connect} from 'react-redux'
import { fetchTeachers } from '../actions/fetchTeachers';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Route, Switch} from 'react-router-dom'

import TeacherShow from '../components/TeacherShow';
// fetch teachers from backend, add them to redux store, map them to props, use those teachers in container
// we set up routes in this container because this is where we are doing our fetching

class TeachersContainer extends React.Component {

    componentDidMount(){
        this.props.fetchTeachers()
    }

    render() {
        return(
            <div>
                  <Switch>
                    <Route path='/teachers/new' component={TeacherForm}/>
                    <Route path='/teachers/:id' render={(routerProps) => 
                        <TeacherShow {...routerProps} teachers={this.props.teachers}/> } />
                    <Route path='/teachers' render={() => 
                        <Teachers teachers={this.props.teachers}/> }
                        />
                    </Switch>
            </div>
            // sends teachers prop down to Teachers component
            // router props gives us access to additional params such as match.  
            // Switch will render the FIRST path that matches, this way we don't hit teachers/id when going to teachers/new
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
// after reducer updates store, mapStateToProps maps to props so they can be passed down to teachers components as props



// fetchTeachers is equivalent to mapDispatchToProps
// connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store, 
// and the functions it can use to dispatch actions to the store.
// It does not modify the component class passed to it; instead, it returns a new, 
// connected component class that wraps the component you passed in.
