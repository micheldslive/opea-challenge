import { Themming } from '.';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => require('next-router-mock'));

describe('<Base />', () => {
  test(`should by render a Base`, () => {
    render(<Themming />);
    const title = screen.getByLabelText(/themming/i);
    expect(title).toBeInTheDocument();
  });
});
