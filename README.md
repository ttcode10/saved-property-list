# How to run the project

Input the following script in the console:

1. yarn
2. yarn start
3. yarn test

# File Structure

.
+-- apis
|   +-- utils
|       +-- index.ts
|       +-- axios.ts
|       +-- urls.ts
+-- components
|   +-- index.ts
|   +-- Button.tsx
|   +-- Card.tsx
|   +-- Header.tsx
|   +-- Typography.tsx
|   +-- __test__
+-- pages
|   +-- index.ts
|   +-- Home
|       +-- index.ts
|       +-- Home.tsx
|       +-- components
|           +-- index.ts
|           +-- PropertyCard.tsx
|       +-- __test__
|   +-- StyleGuide
|       +-- index.ts
|       +-- StyleGuide.tsx
+-- themes
|   +-- index.ts
|   +-- themes.ts
+-- App.tsx
+-- index.tsx
+-- index.css

# Development Iteration

I followed these steps to iterate the app:

## [Iteration 0] Development Environment Setup
Setup the development environment, including init create-react-app, added styled-components, eslint, prettier.

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