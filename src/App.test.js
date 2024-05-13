import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// A simple test case to check if the App component renders without crashing
test('renders App component', () => {
  render(<App />);
});

// You can write more test cases to verify different aspects of your component's behavior
