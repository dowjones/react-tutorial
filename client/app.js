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
      loaded: false,
      countdown: null
    };
  }

  onTick = () => {

    //make shallow copy of articles in state and remove a random article
    let newarticles = this.state.articles.slice(0);
    newarticles.splice(Math.floor(Math.random() * this.state.articles.length), 1);

    //if we removed everything, stop interval
    if (newarticles.length === 0) {
      clearInterval(this.countdown);
    }

    this.setState({
      countdown: newarticles.length,
      articles: newarticles
    })
  }

  componentDidMount() {
    //fetching data clientside
    fetch('/api/articles').then((data) => {
      return data.json();
    }).then((data) => {

      this.countdown = setInterval(this.onTick, 1000);

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
    const {loaded, error, articles, countdown} = this.state;
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
      let accountMessage = '';

      articles.map((article, idx) => {
        articleJSX.push(
          <Article
            key={idx}
            {...article}
          />
        );
      });
      // code above is equal to this:
      // for (let i = 0; i < articles.length; i++) {
      //   articleJSX.push(
      //     <Article key={i} headline={articles[i].headline}></Article>
      //   );
      // }

      if (countdown === 0) {
        accountMessage = <img src="https://cdn-content-production.cxpublic.com/130d147f3fa8cd444e5e5c107c5457dffdf9af67c8ee28ecfa3d3ee2dd078341.jpg" />
      } else if (countdown === null) {
        accountMessage = 'Welcome!';
      }
      else {
        accountMessage = `Welcome! You have ${countdown} seconds left`
      }

      return (
        <div>
          <HelloWorld />
          <div className="countdown">{accountMessage}</div>
          <div class="articles">
            {articleJSX}
          </div>
        </div>
      );

    }
  }
}

export default App;
