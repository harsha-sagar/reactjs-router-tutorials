import React from 'react';
import { Router, Route, Link, Redirect, hashHistory } from 'react-router';

class Home extends React.Component {
    componentWillMount(){
        this.context.router.setRouteLeaveHook(this.props.route, this.routeWillLeave);
/*
    2. registering for handling route leaving
       a. "routeWillLeave" is the custom call back function which we implement
*/
    }

    routeWillLeave(nextLocation){
console.log(`leaving Home for ${nextLocation.pathname}`);
    }
/*
    1. route leaving handler
       a. "nextLocation" object cantains the details of the next route to be switched/activated
*/

    render(){
        return <div><h1>Home</h1><Links /></div>;
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};
/*
    3. Without declaring contextTypes, "context" cannot be used
*/

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
