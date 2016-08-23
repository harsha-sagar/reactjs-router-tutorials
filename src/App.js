import React from 'react';
import { Router, Route, Link, Redirect, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

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
