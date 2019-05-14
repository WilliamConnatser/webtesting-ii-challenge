import React, {Component} from 'react'

export default class Display extends Component {
    render() {
        return (
            <div>
                <h2>Strikes: {this.props.score.strikes}</h2>
                <h2>Balls: {this.props.score.balls}</h2>
            </div>
        )
    }
}
