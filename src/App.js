import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = (props) => <div><h1>Home</h1><Links />{props.children}</div>;
const About = (props) => <div><h1>About</h1>{props.children}</div>;
const Contact = (props) => <div><h1>Contact</h1>{props.children}</div>;

const Links = () =>
    <nav>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/about/contact">Contact</Link><br/>
    </nav>

class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Home}>
                    <Route path="about" component={About}>
                        <Route path="contact" component={Contact}></Route>
                    </Route>
                </Route>
            </Router>
        );
    }
}

/*
    On clicking "/" link, Home component gets rendered.
    On clicking "/about" link, Home component gets rendered. Plus About component is passed as children to Home component
    On clicking "/about/contact" link -
    a. Home component gets rendered.
    b. About component is intiated & passed as children to Home component
    c. Contact component is intiated & passed as children to About component
*/

export default App;
