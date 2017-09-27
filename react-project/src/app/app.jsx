import React from 'react';
import './app.css';
import logo from './logo_og.png';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: `[TECH.IO] React template`
        };
    }
    render() {
        return (<div>
            <img className='logo' src={logo}></img>
            <h1 className='title'>
                {this.state.title}
            </h1>
        </div>);
    }
}