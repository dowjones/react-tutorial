import React, { Component } from 'react';

//import any other components here
import HelloWorld from '../src/helloworld';

//import CSS here, so webpack knows to include in bundle
import style from '../client/style/main.css';

//this is the component that generates the body of the page
class App extends Component {
  
  render() {
      return (
        <div>
          <HelloWorld />
        </div>
      );

    }
  }
}

export default App;
