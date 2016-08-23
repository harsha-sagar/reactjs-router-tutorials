import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = () => <div><h1>Home</h1><Links /></div>;
const About = () => <div><h1>About</h1><Links /></div>;
const Contact = () => <div><h1>Contact</h1><Links /></div>;

const Links = () =>
    <nav>
        <Link activeClassName="active" to="/">Home</Link><br/>
        <Link activeClassName="active" to="/about">About</Link><br/>
        <Link activeClassName="active" to="/contact">Contact</Link><br/>
    </nav>
    // <nav>
    //     <Link activeStyle={{color: 'green'}} to="/">Home</Link><br/>
    //     <Link activeStyle={{color: 'green'}} to="/about">About</Link><br/>
    //     <Link activeStyle={{color: 'green'}} to="/contact">Contact</Link><br/>
    // </nav>
/*
    lines 14-18 shows another approach for lines 9-13
    comment 9-13 lines, uncommenting the lines 14-18
*/

class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Router>
        );
    }
}

export default App;
