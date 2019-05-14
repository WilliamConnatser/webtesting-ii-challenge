import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Display from './Display';

class App extends React.Component {
    constructor(props) {
        super(props);

        if (props.count === undefined) 
            this.state = {
                balls: 0,
                strikes: 0
            }
        else 
            this.state = {
                balls: props.count.balls,
                strikes: props.count.strikes
            }
        }

    actionHandler = event => {
        switch (event.target.id) {
            case 'strike':
                if (this.state.strikes < 2) 
                    this.setState({
                        strikes: this.state.strikes + 1
                    });
                else 
                    this.setState({strikes: 0, balls: 0});
                break;
            case 'ball':
                if (this.state.balls < 3) 
                    this.setState({
                        balls: this.state.balls + 1
                    });
                else 
                    this.setState({strikes: 0, balls: 0});
                break;
            case 'foul':
                if (this.state.strikes < 2) 
                    this.setState({
                        strikes: this.state.strikes + 1
                    });
                break;
            case 'hit':
                this.setState({strikes: 0, balls: 0});
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Scoreboard</h1>
                    <Dashboard actionHandler={this.actionHandler}/>
                    <Display count={this.state}/>
                </header>
            </div>
        );
    }
}

export default App;
