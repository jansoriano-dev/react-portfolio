import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { MYPROJECTS } from './shared/myprojects';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { myprojects: MYPROJECTS }
    }
    render() {
        return (
            <div>
                <Main myprojects={this.state.myprojects} />
            </div>
        )
    }
}
export default App;
