import React from 'react';
import { Router, Route, Link, Redirect, hashHistory } from 'react-router';

const Home = (props) => <div><h1>{props.location.query.message || "Hello world"}</h1><Links/></div>;

const About = () => <div><h1>This is About page</h1><Links/></div>;

const Contact = () => <div><h1>This is Contact page</h1><Links/></div>;

const Links = () =>
    <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/about-us">About us</Link><br/>
        <Link to="/contact">Contact</Link><br/>
    </nav>


class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Redirect from="/about-us" to="/about"></Redirect>
            </Router>
        );
    }
}

export default App;
