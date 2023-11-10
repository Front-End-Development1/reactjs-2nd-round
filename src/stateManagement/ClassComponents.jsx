import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h3>Counter example using Class Components</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default ClassComponent;