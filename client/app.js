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

export default App;

/* STEP 2, MORE COMPLICATED CODE FOLLOWS:


import React, { Component } from 'react';

//import any other components here
import HelloWorld from '../src/helloworld';
import Article from '../src/article';

//import CSS here, so webpack knows to include in bundle
import style from '../client/style/main.css';

//this is the component that generates the body of the page
class App extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    //default state
    //this keeps track of "live" data on the browser
    this.state = {
      articles: null,
      error: null,
      loaded: false
    };
  }

  componentWillMount() {
    //fetching data clientside
    fetch('/api/articles').then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);

      //send data to our state
      //which will trigger render()
      this.setState({
        articles: data.items,
        loaded: true
      });
    }).catch((error) => {
      console.log(error);

      this.setState({
        error: error,
        loaded: true
      });
    });
  }

  //click handler for button
  toggle() {
    console.log('toggle button clicked');
  }

  render() {
    const {loaded, error, articles} = this.state;
    //  code above is equal to this:
    //  const loaded = this.state.loaded;
    //  const error = this.state.error;
    //  const articles = this.state.articles;

    if (error) {
      //render this when there's error getting data
      return <div>Sorry! Something went wrong</div>
    } else if (!loaded) {
      //render while content is loading
      return <div>Loading...</div>
    } else {
      //render articles
      let articleJSX = [];

      articles.map((article, idx) => {
        articleJSX.push(
          <Article
            key={idx}
            headline={article.headline}
          />
        );
      });
      // code above is equal to this:
      // for (let i = 0; i < articles.length; i++) {
      //   articleJSX.push(
      //     <Article key={i} headline={articles[i].headline}></Article>
      //   );
      // }

      return (
        <div>
          <button onClick={this.toggle}>Toggle Something</button>
          <HelloWorld />
          <HelloWorld message="Hi!" />
          {articleJSX}
        </div>
      );

    }
  }
}

export default App;




*/
