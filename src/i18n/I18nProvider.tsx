import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';

import enLocale from 'react-intl/locale-data/en';
import ruLocale from 'react-intl/locale-data/ru';
import uaLocale from 'react-intl/locale-data/uk'; // :( should be ua

import en from './locales/en.json';
import ru from './locales/ru.json';
import ua from './locales/ua.json';

addLocaleData([...enLocale, ...ruLocale, ...uaLocale]); // we setup react-intl with supported locales

const messages: { [key: string]: { [key: string]: string } } = { en, ru, ua };

interface II18nProviderProps {
  children: React.ReactElement<any>;
};

const getLanguageFromBrowser = () => {
  const languageFromBrowser: string = (navigator.languages && navigator.languages[0])
    || navigator.language
    || (navigator as any).userLanguage;
  return languageFromBrowser.slice(0, 2); // ru-RU -> ru
}

const formatLanguage = (language: string) => {
  // for not supported langs we set english as default
  if (!messages[language]) {
    return 'en'
  }
  // react-intl does not support ukranian, so we use uk instead
  if (language === 'ua') {
    return 'uk';
  }

  return language;
}

const I18nProvider = ({ children }: II18nProviderProps) => {
  const query = new URLSearchParams(window.location.search);

  const languageFromQuery = query.get('language');
  const language = languageFromQuery || getLanguageFromBrowser() || 'ru';

  return (
    <IntlProvider locale={formatLanguage(language)} messages={messages[language]}>
      {children}
    </IntlProvider>
  );
};

export default I18nProvider;
