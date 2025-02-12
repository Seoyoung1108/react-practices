import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        };
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>{'+'}</button>
                {' '}
                { count }
                {' '}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>{'-'}</button>
            </div>
        );
    }
}