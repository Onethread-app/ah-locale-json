# Contributing

If you want to report a bug or suggest a feature, please open an issue.

While opening an issue for bug, please make sure to include the following information:

- The version of the library that contains the bug
- A description of the expected behavior
- A description of the actual behavior

// Example for a bug:

## Title: The word `Kick off Date` is not being translated correctly

The word `Kick off Date` is being translated as `কিক অফ তারিখ` instead of `কিকঅফ তারিখ`

Package version: 1.0.0

Website link: https://`your_subdomain`.agencyhandy.com/dashboard

File name (Optional): locales/frontend/en.json

Line number (Optional): 123

Expected behavior: The word `Kick off Date` should be translated as `কিকঅফ তারিখ`

Actual behavior: The word `Kick off Date` is being translated as `কিক অফ তারিখ`

// Example for a feature:

Add a title and description for the issue with the label `feature`

## Title: I want Dothraki language support

Hey, I am a huge Game of thrones fan.

I want to create a Dothraki language based shop and manage my clients from agency handy.

If you want to help us with a new language, please open a pull request with the following information:

## Title: [Dothraki] Add Dothraki language support

Insert the dothraki languages files in the `src/locales/frontend` folder and `src/locales/backend` folder

Add the following code in the `src/locales/frontend/index.ts` file:

```ts
// other lines
import { kr } from './korean'
import { es } from './spanish'
// insert here
import { dothraki } from './dothraki'

const locales = { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }

export { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }

export default locales
```

Similarly add the following code in the `src/locales/backend/index.ts` file:

```ts
// other lines
import { kr } from './korean'
import { es } from './spanish'
// insert here
import { dothraki } from './dothraki'

const locales = { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }

export { en, bn, cn, cz, de, fr, jp, kr, es, dothraki }

export default locales
```
