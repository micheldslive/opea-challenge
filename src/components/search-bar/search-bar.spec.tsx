import { render, screen } from '@testing-library/react';
import { SearchBar } from '.';
import i18n from '@/i18n';
import { I18nextProvider } from 'react-i18next';

jest.mock('next/router', () => require('next-router-mock'));

describe('<SearchBar />', () => {
  it('should render the SearchBar', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SearchBar />
      </I18nextProvider>
    );

    expect(screen.getByLabelText(/search-bar/i)).toBeInTheDocument();
  });
});
