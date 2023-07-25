import { render } from '@testing-library/react';
import React from 'react';
import Gallery from './Gallery';

describe('test Gallery.js', () => {
	it('check Search element exist', () => {
		const { getByText } = render(<Gallery />);
		const search = getByText('searchBar');
		expect(search).toBeTruthy;
	});

	it('check loadMore button exist', () => {
		const { getByRole } = render(<Gallery />);
		const button = getByRole('button');
		expect(button).toBeTruthy;
	});
});
