# Another Task Manager

This project consists on an Task Manager and is just a playground to train my React Skills.

[Another Task Manager web app link](https://another-task-manager.firebaseapp.com/)

## /src structure

- `/components`: dumb components
- `/containers`: components used to manipulate/receive state changes
- `/modules`: all redux stuff (re-ducks pattern)
- `/repositories`: database stuff
- `firebase.js`: init firebase (export db as then repositories only use one instance of it)
- `routes.js`: react-router basic configs
- `sagas.js`: setup watchers and check if the user is logged in
- `store.js`: redux store configs

## What is still missing

- Tests: I was just fooling around with ant.d, redux, redux-saga and so on... and did not developed the tests (yet!)
- Firestore Security rules: almost the same above reason 

## What can be improved

- Normalizr usage: not sure if it would help me, but it seems to be a good way to normalize data (I am doing it manually)
- Reselect: probably it would improve my queries to redux store and, theoretically, would improve the performance (less state tree re-recalcs)

## What I still don't know...

- Immutable toJS(): at some points I couldn't figure out how to not use `toJS()`. I know, is bad, but I just wanted to see my application working... I am still trying to discover a way to solve this issue
- Should I embed tasks inside lists documents? The app would save a lot of Firesotre read queries and the data could be easily normalized through `normalizr` (instead of 1 `lists` query + N `tasks` queries, it would do only 1 to `lists`)
- What is the best way to organize the "dumb-components"? As you may see, I created the components directly on a `index.jsx` file, but I am not sure if this is the best practice. I could do a `export default Component` on `index.js` and put the component on `Component.jsx` for example.
- Should I put sub-components inside sub-folders or should I put it on the component's root folder (`Component/SubComponent.jsx` or `Component/SubComponent/index.jsx`)?
- Not sure if creating a `Route` component for private/public routes is the best idea to protect for authenticated users
- Not sure about the redux-sagas design I made (`operations.js` files)
- Don't know why the scrolling on iOS devices get stuck sometimes (I made some tweaks on `index.css`, but not sure if they work).
