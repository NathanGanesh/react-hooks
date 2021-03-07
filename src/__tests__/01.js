import * as React from 'react';

import { render, screen } from '@testing-library/react';

import App from '../exercise/01';
import userEvent from '@testing-library/user-event';
// import App from '../exercise/01'

test('typing a name shows a greeting', () => {
	render(<App />);
	userEvent.type(screen.getByRole('textbox', { name: /name/i }), 'bob');
	expect(screen.getByText(/hello.*bob/i)).toBeInTheDocument();
});
