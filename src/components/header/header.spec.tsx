import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the Header', () => {
    render(<Header />);

    expect(screen.getByLabelText(/header/i)).toBeInTheDocument();
  });
});
