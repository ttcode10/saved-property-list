# Live preview
https://ttcode10.github.io/saved-property-list/

# How to run the project

Input the following script in the console:

1. yarn
2. yarn start
3. yarn coverage

# File structure
* [components/](./src/components)
  * [__test__/](./src/components/__test__)
    * [Header.test.tsx](./src/components/__test__/Header.test.tsx)
  * [Button.tsx](./src/components/Button.tsx)
  * [Card.tsx](./src/components/Card.tsx)
  * [Header.tsx](./src/components/Header.tsx)
  * [Typography.tsx](./src/components/Typography.tsx)
  * [index.ts](./src/components/index.ts)
* [pages/](./src/pages)
  * [Home/](./src/pages/Home)
    * [__test__/](./src/pages/Home/__test__)
      * [Home.test.tsx](./src/pages/Home/__test__/Home.test.tsx)
    * [components/](./src/pages/Home/components)
      * [PropertyCard.tsx](./src/pages/Home/components/PropertyCard.tsx)
      * [index.ts](./src/pages/Home/components/index.ts)
    * [Home.tsx](./src/pages/Home/Home.tsx)
    * [index.ts](./src/pages/Home/index.ts)
  * [StyleGuide/](./src/pages/StyleGuide)
    * [StyleGuide.tsx](./src/pages/StyleGuide/StyleGuide.tsx)
    * [index.ts](./src/pages/StyleGuide/index.ts)
* [themes/](./src/themes)
  * [index.ts](./src/themes/index.ts)
  * [themes.ts](./src/themes/themes.ts)
* [App.tsx](./src/App.tsx)
* [index.css](./src/index.css)
* [index.tsx](./src/index.tsx)

# Development iteration

I followed these steps to iterate the app:

## [Iteration 0] Setup development environment and CI/CD pipeline
Setup the development environment, including init create-react-app, added styled-components, eslint, prettier. Built CI/CD pipeline with Github Pages

## [Iteration 0] Global themes

Set basic theme elements for global usage, including colors, font-family, box-shadow, promoting consistent styles across the app.

## [Iteration 1] Public Components

Built global components with styled-components: Button, Card, Header, Typography. Examined how they looked in StyleGuide page.

## [Iteration 2] Page-scoped components

Integrated basic components into a more complicated component (PropertyCard.tsx) for Homepage.

## [Iteration 3] Page Integration
Formed Homepage with all components and added click functions for save/remove items, hover, disable behaviours.

## [Iteration 3] Testing

Added testing script to check if all the core elements are correctly rendered and performed.

## [Iteration 4] Refactor

Refactored and simplified codes.
