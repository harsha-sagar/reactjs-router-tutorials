import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

const Home = (props) => <div><h1>{props.location.query.message || "Hello world"}</h1><Links/></div>;

const Links = () =>
    <nav>
        <Link to={{pathname: '/', query:{message: 'hello sagar'}}}>hello sagar</Link><br/>
        <Link to={{pathname: '/', query:{message: 'hi harsha'}}}>hi harsha</Link><br/>
    </nav>


class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Home}></Route>
            </Router>
        );
    }
}

export default App;
