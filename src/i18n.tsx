import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import ua from 'react-intl/locale-data/uk'; // :( should be ua

addLocaleData([...en, ...ru, ...ua]); // we setup react-intl with supported locales

const language = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  (navigator as any).userLanguage;

const messages = {};

interface II18nProviderProps {
  children: React.ReactElement<any>;
};

const I18nProvider = ({ children }: II18nProviderProps) => (
  <IntlProvider locale={language} messages={messages}>
    {children}
  </IntlProvider>
);

export default I18nProvider;
