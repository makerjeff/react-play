# React.JS Play

## Notes
- Download Chrome Extensions: React Detector, React Developer Tools.
    - this detects versions of React, as well as has a debugger specific to react states and props.
- [Babel in-Browser Transpiler](https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js): Use this for development, use proper transpiler for production.
- [Gulp-Babel](https://www.npmjs.com/package/gulp-babel)
- "Component"
    - React.createClass({})
    - always requires a 'render()' function within createClass.
    - need to render using ReactDOM.render(\<component/\>, DOM element to render to )
- "Attributes"
    - example:
        > {this.props.\<attribute\>}
    - Then add to ReactDOM.render() the attributes (\<MyComponent text="some text"\/>)
    - close the component and you can use
        > {this.props.children}
        - to display the text / children from within the component.
- "Properties"
    - {this.props.text} in the class.
- ReactDOM likes to always render ONE element, so wrap multi elements in a DIV tag.
- What React is all about: Displaying dynamic content and being able to reuse components.
- in JSX, don't use "class", use "className".
- We can create our own methods inside React.Component classes.
- Function / method declarations within classes don't need semi colons.
- "States"
    - when a component state changes, the Component's "render()" function is called again.
    - ES6 requires explicit 'this' binding that React.CreateClass already does:
        - In the constructor, add:
        this.method = this.method.bind(this);
    - Must use "this.setState({checked: !this.state.checked})" for the Component to know it's been updated.
- "Reference"
    - use this to grab values from the UI:
    - add ref="text_element" to text elements etc.
    - access element value via "this.refs.text_element.value";
    
- "propTypes"
    - [React Documentation: PropTypes in ES6](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

- [React Keys](https://facebook.github.io/react/docs/lists-and-keys.html#keys): Helps React identify which items have changed, are added, or are removed.
    
### ES6
- [Sample ES6 Classes](https://googlechrome.github.io/samples/classes-es6/)
- [Refactoring React Components to ES6 classes](https://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes)
    - must use this.method = this.method.bind(this);
    - must set states using this.setState({states object});
- template literals require 'back ticks' ``, not quotes ''
- [ES6 Spread Operators](https://davidwalsh.name/spread-operator): Essentially the same as using function.apply(), but with a simpler sytax.
    - Example: function.apply(null, args) vs function(...args);
    - NOTE: Used when you want to pass a different 'this' to the function.

### ARRAYS review
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): Returns (don't forget to use the keyword 'return', otherwise array will be undefined) a new array with the results of calling a provided function on every element in the calling array. Essentially, you can perform an operation on each element, such as doubling a number, appending a suffix, etc.
    - arr.map(function callback(currentValue, index, array) { \<do something here\> });