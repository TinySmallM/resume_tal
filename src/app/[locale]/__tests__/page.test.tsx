import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { CV_HREF } from '@/app/constants';
import enMessages from '@/shared/i18n/messages/en.json';
import ruMessages from '@/shared/i18n/messages/ru.json';

import Home from '../page';

describe('Home page i18n', () => {
  it('renders Russian text and CV link correctly', () => {
    render(
      <NextIntlClientProvider locale="ru" messages={ruMessages}>
        <Home />
      </NextIntlClientProvider>
    );
    
    expect(screen.getByText(ruMessages.Home.title)).toBeInTheDocument();
    
    const cvLinkRu = screen.getByRole('link', { name: ruMessages.Home.cv });
    expect(cvLinkRu).toBeInTheDocument();
    
    expect(cvLinkRu).toHaveAttribute('href', CV_HREF);
  });

  it('renders English text and CV link correctly', () => {
    render(
      <NextIntlClientProvider locale="en" messages={enMessages}>
        <Home />
      </NextIntlClientProvider>
    );
    
    expect(screen.getByText(enMessages.Home.title)).toBeInTheDocument();
    
    const cvLinkEn = screen.getByRole('link', { name: enMessages.Home.cv });
    expect(cvLinkEn).toBeInTheDocument();
    
    expect(cvLinkEn).toHaveAttribute('href', CV_HREF);
  });
});
