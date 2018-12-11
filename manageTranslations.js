const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'build/messages',
  translationsDirectory: 'src/i18n/locales/',
  languages: ['ru', 'en', 'ua'] // any language you need
});
