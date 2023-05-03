import React, { Component } from 'react'
import { Button } from '@mui/material';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'shoha',
            count: 0
        }

    }

    handleClick = () => {
        this.setState({count:this.state.count + 1})
    };

    

    render() {
        return (
            <div>
                <h2>
                    {this.state.name} is {this.props.age} years old.
                </h2>
                <h3>
                    {this.state.count}
                </h3>
                <button onClick={this.handleClick}>
                    +
                </button>

                <Button variant="contained">Contained</Button>

            </div>
        )
    }
}
