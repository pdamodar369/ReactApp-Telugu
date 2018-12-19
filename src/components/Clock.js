import React from 'react';


export default class Clock extends React.Component {
    state = { time: new Date() }

    componentDidMount() {
        this.timerID = setInterval(() => { this.setState({ time: new Date }) }, 1000)
    }

    componentWillUnMount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <div>Time: {this.state.time.toLocaleTimeString()}</div>
                <input type='button' value='start' onClick={this.componentDidMount.bind(this)} />
                <input type='button' value='stop' onClick={this.componentWillUnMount.bind(this)} />
            </div>
        )
    }
}