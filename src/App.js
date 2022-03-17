import React from 'react';
// import {connect} from 'react-redux'
import TeachersContainer from './containers/TeachersContainer';


class App extends React.Component {

  componentDidMount() {
    
  }


  render(){
    return (
      <div className="App">
        <TeachersContainer/>
        <Home/>
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




export default App;
// connects the redux store to this component.  mapSTateToProps gives us access to data in the store(if we don't need to mapStateToProps, can pass null as first argument).  passing an action creater(fetchTeachers) allows us to directly update our store from this component.
// calls dispatch on return value of fetchTeachers