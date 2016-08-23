import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Outer = (props) => <div><h1>Our Site</h1><Links />{props.children}</div>;
const About = (props) => <div><h1>About</h1>{props.children}</div>;
const Contact = (props) => <div><h1>Contact</h1>{props.children}</div>;

const Links = () =>
    <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">Contact</Link><br/>
    </nav>

class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Outer}>
                    <IndexRoute component={About}></IndexRoute>
                    <Route path="about" component={About}></Route>
                    <Route path="contact" component={Contact}></Route>
                </Route>
            </Router>
        );
    }
}

export default App;
