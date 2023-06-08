import { render, screen } from '@testing-library/react';
import { SearchBar } from '.';

jest.mock('next/router', () => require('next-router-mock'));

describe('<SearchBar />', () => {
  it('should render the SearchBar', () => {
    render(<SearchBar />);

    expect(screen.getByLabelText(/search-bar/i)).toBeInTheDocument();
  });
});
