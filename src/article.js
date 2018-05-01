import React, { Component } from 'react';

//Basic Article Component
class Article extends Component {
  constructor() {
    super();
  }

  //Component Lifecycle
  //https://reactjs.org/docs/react-component.html#the-component-lifecycle
  componentWillMount() {
    console.log('component will mount');
  }
  componentDidMount() {
    console.log('component did mount');
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillUpdate() {
    console.log('component will update');
  }
  componentDidUpdate() {
    console.log('component did update');
  }

  //this fires every time a prop or state changes
  //to use any prop, use this.props.NAME_OF_PROP
  //use {} to add JS expressions
  //use className to add CSS classes
  //remember that this is not HTML!!
  //https://reactjs.org/docs/introducing-jsx.html
  render() {

    const  {
      headline,
      image
    } = this.props;

    return <div className="article">
      {image && <img src={image} className="article__thumbnail" />}
      <h2 className="article__hed">{headline}</h2>
    </div>;
  }
};

//set default props here, if any
Article.defaultProps = {};

//export so others can use
export default Article;
