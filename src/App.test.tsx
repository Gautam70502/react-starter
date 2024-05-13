import React from 'react';
import { render, RenderResult } from '@testing-library/react'; // Importing RenderResult for type definitions
import App from './App';

// A simple test case to check if the App component renders without crashing
test('renders App component', () => {
  const { container }: RenderResult = render(<App />); // Adding type annotation for container
  expect(container).toBeInTheDocument(); // Using TypeScript type checking
});

// You can write more test cases to verify different aspects of your component's behavior
