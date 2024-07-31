## Contributing

### For non-developers: ###

If you want to contribute to this project and only want to add language, please read the [contributing guide](https://github.com/Onethread-app/ah-locale-json/blob/master/Contributing.md).

### For developers: ###

This is a translation package for [Agency Handy](www.agencyhandy.com)

Agency Handy is a Saas application to manage your clients, teams and invoices in one place.

## Installation

```bash
npm install --save ah-locale-json
```

## Usage

To import all the locale files, use the following code

```js
import locale from 'ah-locale-json'
```

To import only frontend or backend files, use the following code

```js
import locale from 'ah-locale-json/dist/frontend'
import locale from 'ah-locale-json/dist/backend'
```

To import only a specific locale file, use the following code

```js
import locale from 'ah-locale-json/dist/frontend/en'
import locale from 'ah-locale-json/dist/backend/en'
```

## Usage in React

Setting up i18next.

```ts
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { LANGUAGE } from '../constants/settings'
import locale from 'ah-locale-json/frontend'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: locale.en,
    },
    bn: {
      translation: locale.bn,
    },
    // other languages
  },
  lng: LANGUAGE.ENGLISH,
  fallbackLng: LANGUAGE.ENGLISH,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
```

Passing the i18n instance to the provider.

```ts
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { i18n } from './i18n'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  )
}
```

Using the t function in the component.

```ts
import React from 'react'
import { useTranslation } from 'react-i18next'

const Emample = () => {
  const { t } = useTranslation()

  return <h1>{t('AGENCY_HANDY')}</h1>
}
```


## License

No license, you can use it however you want.
