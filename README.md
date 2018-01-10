# Another Task Manager

This project consists on an Task Manager and is just a playground to train my React Skills.

## /src structure

- `/components`: dumb components
- `/containers`: components used to manipulate/receive state changes
- `/modules`: all redux stuff (re-ducks pattern)
- `/repositories`: database stuff
- `firebase.js`: init firebase (export db as then repositories only use one instance of it)
- `routes.js`: react-router basic configs
- `sagas.js`: setup watchers and check if the user is logged in
- `store.js`: redux store configs

## What can be improved

- Tests: yep, I was just fooling around with ant.d, redux, redux-saga and so on... so no tests, by now
- Normalizr usage: not sure if it would help me, but it seems to be a good way to normalize data (I am doing it manually)
- Reselect: probably it would improve my queries to redux store and, theoretically, would improve the performance (less state tree re-recalcs)
- Immutable toJS(): at some points I couldn't figure out how to not use `toJS()`. I know, is bad, but I just wanted to see my application working... I am still trying to discover a way to solve this issue

## Doubts...

- Should I embed tasks inside lists documents? The app would save a lot of Firesotre read queries and the data could be easily normalized through `normalizr`
- What is the best way to organize the "dumb-components"? As you may see, I created the components directly on a `index.jsx` file, but I am not sure if this is the best practice. I could do a `export default Component` on `index.js` and put the component on `Component.jsx` for example.
- Should I put sub-components inside sub-folders or should I put it on the component's root folder?
- Not sure if creating a `Route` component for private/public routes is the best idea
- Not sure about the redux-sagas design I made (`operations.js` files)
- Don't know why the scrolling on iOS devices get stuck sometimes (I made some tweaks on `index.css`, but not sure if they work).
