import React, {Component} from 'react'

export default class Display extends Component {
    render() {
        return (
            <div>
                <h2>Strikes: {this.props.count.strikes}</h2>
                <h2>Balls: {this.props.count.balls}</h2>
            </div>
        )
    }
}
