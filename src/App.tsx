// App.tsx
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <div>
      <h1>React with TypeScript</h1>
      <Greeting name="Ben Lakhdher Malek" />
      <Counter />
    </div>
  );
};

export default App;