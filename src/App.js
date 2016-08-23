import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Home = () => <h1>home</h1>;
const HomeBody = () => <div>this is home body</div>;
const Other = () => <h1>other</h1>;
const OtherBody = () => <div>this is other body</div>;

const Container = (props) => <div>{props.header}{props.body}<br/><Links/></div>;

const Links = () =>
    <nav>
        <Link to="/">home</Link><br/>
        <Link to="/other">other</Link><br/>
    </nav>

class App extends React.Component {
    render(){
        return (
            <Router history={ hashHistory }>
                <Route path="/" component={Container}>
                    <IndexRoute components={{header: Home, body: HomeBody}}></IndexRoute>
                    <Route path="other" components={{header: Other, body: OtherBody}}></Route>
                </Route>
            </Router>
        );
    }
}

export default App;
