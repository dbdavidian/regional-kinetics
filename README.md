# Regional Kinetics

## Setup and Run the project

Install the dependencies: `npm install`

Run the project for development: `npm start`

Build the project for production: `npm run build`

Serve the production build: `npx serve -s build`

## General structure of the project

You can find all the pages in separate directories under the src/components/*

For example,
Home: src/components/Home
About: src/components/About
...

## How to add or edit contents

### Recommendations

To add a new country under the drop down of recommendations, you need to add it under **src/components/Recommendations/Recommendations.js** The order is the same in the list and browser.

Then you need to go to the **src/components/Country/Country.js** and add a new switch case, where the newly added names should match in the **Recommendations.js** and **Country.js**

You can follow the same structure as it is already available.

### Simulation and Publications

You don't need to do the steps above for these two routes. You only need to copy the existing ones and modify it accordingly.

The general structure of the cards (articles) is the following:
```js
<CardView
    headline={'Title'}
    body={'Short Summary'}
    link={'link to the pdf/file'}
/>
```
