import React from 'react';


class App extends React.Component {

  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/v1/teachers')
      .then(response => response.json())
      .then(data => console.log(data))
}


  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }

}

export default App;
