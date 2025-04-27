// Greeting.tsx
import React from 'react';

// Define Props interface
interface GreetingProps {
  name: string; // 'name' must be a string
}

// Functional Component with TypeScript annotations
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;