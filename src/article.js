import React, { Component } from 'react';

//Basic Article Component
class Article extends Component {
  constructor() {
    super(props);

    this.state = {};
  }

  //Component Lifecycle
  //https://reactjs.org/docs/react-component.html#the-component-lifecycle
  /* DEPRECATED LIFECYCLE METHODS BELOW
  UNSAFE_componentWillMount() {
    console.log('component will mount');
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('component will receive props');
  }
  UNSAFE_componentWillUpdate() {
    console.log('component will update');
  }
  */


  static getDerivedStateFromProps(props, state) {
    console.log('get derived state from props');
    return null;
  }

  componentDidMount() {
    console.log('component did mount');
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('get snapshot before update');
    return { foo: 'bar' };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update');
  }
  componentWillUnmount() {
    console.log('component will unmount');
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
