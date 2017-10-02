# React Router Tutorial

React.js is quite a famous library among the JavaScript developers. Routing to front end application is a very important concept and today I am going to show you how to use react router v4 in our React.js application. We will see Declarative React Routing for React.js app.

The source code for this template is on [GitHub](https://github.com/KrunalLathiya/playground-s7hbYjBE), please feel free to come up with proposals to improve it.

# Step 1: Build an App.js React component.
In the **src** directory, create one component file called **App.js** and put the following code into it.
```javascript
// App.js

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div>
          <h2>Welcome to React Router Tutorial</h2>
        </div>
    );
  }
}

export default App;
```
Now, in the main.js file, put the following into it.
```javascript
// main.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
```
## The Router
There are two types of router object.

1. BrowserRouter
2. HashRouter

If we want to handle the dynamic request then use BrowserRouter and if we want to serve the static request then use HashRouter.

## History
Every router creates history object to keep track of the current location of the page.

## Rendering a <Router>
If we take our above example then it will look like this.

```javascript
// main.js

import { BrowserRouter } from 'react-router-dom'
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
```
This is how we can render the BrowserRouter object.

# Step 2: Make three components.
First, make one components directory and in that make Home.js component.

```javascript
// Home.js

import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
        </div>
    );
  }
}

export default Home;
```
Second make About.js component.

```javascript
// Home.js

import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div>
          <h2>About</h2>
        </div>
    );
  }
}

export default About;
```
Third make Contact.js component.
```javascript
// Contact.js

import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
        <div>
          <h2>Contact</h2>
        </div>
    );
  }
}

export default Contact;
```
# Step 3: Register the routes in the App.js file.

```javascript
// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
```
The final main.js file will look like this.

```javascript
// main.js

import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(
  <App />, document.getElementById('app'));
```
Our index.html file looks like this.
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <title>React Router Tutorial</title>
</head>
<body>
    <div id="App" class="container"></div>
</body>

</html>
```

@[React Router Tutorial]({"stubs": ["src/App.js", "src/main.js", "src/index.html", "src/components/Home.js", "src/components/About.js", "src/components/Contact.js"], "command": "./run.sh"})