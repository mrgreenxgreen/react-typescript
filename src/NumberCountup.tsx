import React, { Component } from 'react';

interface NumberCountupProps {
    realValue: number;
}

class NumberCountup extends Component<NumberCountupProps> {
    numberElement = React.createRef<HTMLDivElement>();
    currentValue = 0;
    intervalId: any;

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.currentValue++;

            // Use tolerance and check realValue for precision and changes:
            if (Math.abs(this.currentValue - this.props.realValue) < 0.01 || this.currentValue >= this.props.realValue) {
                clearInterval(this.intervalId);
            }

            this.forceUpdate(); // Trigger re-render
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <div ref={this.numberElement}>{this.currentValue.toFixed(2)}</div>;
    }
}

export default NumberCountup;
