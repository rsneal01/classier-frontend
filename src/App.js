import React from 'react';
import {connect} from 'react-redux'
import {fetchTeachers} from './actions/fetchTeachers'

class App extends React.Component {

  componentDidMount() {
    
  }


  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

  // const mapStateToProps = () => {
  //   // our way of accessing values in our store as props
  //   return {
  //     teachers: state.teachers
  //   }
  // }




export default connect(null, {fetchTeachers})(App);
// connects the redux store to this component.  mapSTateToProps gives us access to data in the store(if we don't need to mapStateToProps, can pass null as first argument).  passing an action creater(fetchTeachers) allows us to directly update our store from this component.
// calls dispatch on return value of fetchTeachers