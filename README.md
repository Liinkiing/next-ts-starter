# Next Starter

A starter to bootstrap your **Next** application (nice pun gg)

## Usage

```bash
$ yarn
# install dependencies

$ yarn dev
# launch Next dev script

$ yarn build
# launch Next build script

$ yarn start
# launch Next start script

$ yarn test
# launch test suite

$ yarn cy:open
# open cypress (you first need to install deps in cypress folder)

$ yarn ts:check
# check TypeScript

$ yarn lint
# run ESLint
```

## Next config

It comes already configured with some nice plugin. You can see in `next.config.js` what is
used. In short, it allows support of importing images files and fonts within webpack.
It also comes with **NProgress** support by default, so it shows a small loading bar in top of
the page when loading. You can find the component in `~/components/NProgress.tsx`, and it is used in the
custom `_app.tsx`

## Styled component

The template comes with [styled-components](https://github.com/styled-components/styled-components).
Again, you can either choose to not use it, this is a personal choice.
You can also find a `styles` folder, which contains many related
styled-components files to keep things organized. It's also includes all themes-related stuff in here.
It's again a personal convention that I follow, feel free to annihilate this directory if you want 😢

## Styled system

It also comes with [styled-system](https://github.com/styled-system/styled-system). It is a great way to
build reusable UI blocks with a great props API and consistent spaces / typography.
A lot comes from the theme, provided in `~/styles/themes/base.ts` where we define some
breakpoints, spacings and typography stuff. It allows then the custom `AppBox` component (`~/ui/AppBox`)
to be aware of your theme and then build something amazing with the primitives.
By default, this starter provides some basic examples components that uses this pattern, for
example the `AppNav` component (`~/components/layout/AppNav`).

🔥 It also supports and provides autocomplete for props that takes source from the theme (e.g `bg`, `zIndex`, `border`...). 🔥

**TypeScript > 4.1** is mandatory because I'm using the new [Template Litteral Types](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types) to
provide autocompletion of the color prop based of the nested `colors` object, so when using
`bg` prop for exemple, you should have autocompletion for `red.xxx, blue.xxx` or anything defined in your `colors.ts`.
It supports nested elements with a dot notation! (that's why TS 4.1 is required)

## Framer motion

Again, personal preference here, but the starter comes with framer motion already configured
to handle Next pages changes and enable some smooth transitions when navigating. You
can find the default variant used for the page transitions in `~/common/framer.ts`.

## Testing

[Jest](https://github.com/facebook/jest) and [@testing-library/react](https://github.com/testing-library/react-testing-library) is used to run your tests. It comes preconfigured
with [ts-jest](https://github.com/kulshekhar/ts-jest) so your tests also checks your types.
You can look the **jest.config.js** and the file **setupTest.ts** to see what's in there.
[jest-styled-components](https://github.com/styled-components/jest-styled-components) is also used to have deterministic classNames
within your styled components that you are testing.
[Cypress](https://cypress.io) starter for e2e tests. Take a look at Cypress config file **cypress.json**

### Cypress

This starter comes by default with [Cypress](https://cypress.io) and some sensible defaults and a custom plugin which enable you to
inject your .env\* files in the Cypress.env helper. It also add support for a per-environment configuration file.
Just add a cypress.<env>.json. It uses by default the `cypress.json` and then extend the configuration if you have
a `cypress.<env>.json`. Take a look at the various configuration file in the `cypress` folder and the custom plugin in `cypress/plugins/index.ts`.
This folder is independant and lives by itself, so it has his own dependencies / scripts / tsconfig and do not pollute the
global namespace. [See why an isolated folder](https://basarat.gitbook.io/typescript/intro-1/cypress#installation)

It also have an opiniated way of interacting with some of your webpages in Cypress. As your application
will grow (and pages would become complex), it's recommended to have some sort of "Page objects" which allows
you to work in a more conveniant way for some complex page. See more here https://basarat.gitbook.io/typescript/intro-1/cypress#tip-creating-page-objects

## Aliases

It includes by default support for aliases in `tsconfig.json`.
They are 1 defaulted alias, ready to use :

```typescript
// ~ refers to src folder
import { something } from '~/file'
```

You can also use for your convenience the global `__DEV__` variable, which is
injected by webpack with the DefinePlugin (see **next.config.js**).

## @types and extending modules

It also includes a `@types` directory under **src**, so you can easily
separate your types or extends some external modules. They are also included in the `tsconfig.json`
For example, if some package named `foo` does not have any types in [DefinitelyTyped](https://definitelytyped.org/), you could
add a `index.d.ts` under `src/@types/foo/index.d.ts`. It is just my personal convention, so do as you want!

```typescript
// src/@types/foo/index.d.ts

// to make sure Typescript get the original types from the module (if any)
import * as foo from 'foo'

declare module 'foo' {
  declare function foo(bar: string): boolean
}
```

Because the `@types` directory is declared in `typeRoots`, Typescript will no longer complain if you imported your package with missing types

## Tooling

The template includes [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) (with [Typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)), [Babel](https://babeljs.io/) and [lint-staged](https://github.com/okonet/lint-staged).
All their related configurations are in the `*rc` files (except for lint-staged, which is located in the `package.json`).
