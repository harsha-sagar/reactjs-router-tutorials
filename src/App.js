import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Message = (props) => <div><h1>{props.params.message || 'no message'}</h1><Links/></div>

const Links = () =>
    <nav>
        <Link to="/hi">hi</Link><br/>
        <Link to="/hello">hello</Link><br/>
    </nav>

class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/(:message)" component={Message}></Route>
            </Router>
/*
wraping parameter in the parenthesis indicates parameter is optional.
hence here "message" in the route url is optional
*/
        );
    }
}

export default App;
