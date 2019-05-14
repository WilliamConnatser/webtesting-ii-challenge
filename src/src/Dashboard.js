import React, {Component} from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <button id="ball" onClick={this.props.actionHandler}>ball</button>

                <button id="strike" onClick={this.props.actionHandler}>strike</button>

                <button id="foul" onClick={this.props.actionHandler}>foul</button>

                <button id="hit" onClick={this.props.actionHandler}>hit</button>
            </div>
        )
    }
}
