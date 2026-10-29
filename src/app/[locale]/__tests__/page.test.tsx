import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import enMessages from '@/shared/i18n/messages/en.json';
import ruMessages from '@/shared/i18n/messages/ru.json';

import Home from '../page';

describe('Home page i18n', () => {
  it('renders Russian text with ru locale', () => {
    render(
      <NextIntlClientProvider locale="ru" messages={ruMessages}>
        <Home />
      </NextIntlClientProvider>
    );
    
    expect(
      screen.getByText(ruMessages.Home.title)
    ).toBeInTheDocument();
  });

  it('renders English text with en locale', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Home />
      </NextIntlClientProvider>
    );
    
    expect(
      screen.getByText(enMessages.Home.title)
    ).toBeInTheDocument();
  });
});
