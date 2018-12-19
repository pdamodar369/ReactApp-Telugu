import React from 'react';
import Welcome from './Welcome'
import Clock from './Clock'

export default class App extends React.Component {
    render() {
        return (
            < div >
                <Welcome name={this.props.name} />
                <Clock />
            </div >
        )
    }
}
