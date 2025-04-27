// Counter.tsx
import React, { Component } from 'react';

// Define Props interface (empty in this case)
interface CounterProps {}

// Define State interface
interface CounterState {
  count: number; // 'count' must be a number
}

// Class Component with TypeScript annotations
class Counter extends Component<CounterProps, CounterState> {
  // Initialize state
  state: CounterState = {
    count: 0,
  };

  // Increment method with proper typing
  increment = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;