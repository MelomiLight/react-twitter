# Twitter React Test Task

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Stack

* `react` — it's a react application overall.
  * `react-dom` — because we need to render React to DOM.
* `redux` — because we need to manage state (tweets, users).
  * `react-redux` — binding of Redux for React.
  * `redux-logger` — logging solutions for Redux. Useful for debugging.
  * `redux-thunk` — to compose more complex actions for Redux.
* `react-router-dom` — widespread routing solution for React.
  * `connected-react-router` — bindings of router for Redux. Useful for time traveling.
* `react-scripts` — because we need to incapsulate build process under a single dependency.
* `react-markdown` — for rendering links, styled text in tweets. Can be replaced by Remark itself.
* `moment` — useful for dealing with dates.
* `material-ui/core` — just a UI library to make it look nicer.
  * `typeface-roboto` — Roboto font.
* `uuid` — a library for generating unique ids.
* `hysky` — useful tool for adding git-hooks.
* `lint-staged` — easier linting for staged files.
* `prettier` — tool for code formatting.
* `prop-types` — for checking component's properties.
* `react-test-renderer` — for rendering React components in snapshots. Enzyme would be an overkill here.
* `redux-mock-store` — for mocking Redux store in tests.

## To-do

* Add tests for containers.

## Screenshot

### Login page

![screen shot 2018-08-10 at 21 23 45](https://user-images.githubusercontent.com/3459374/43974997-d5d5ca32-9ce4-11e8-8b99-c44927fa522d.png)

### Timeline

![screen shot 2018-08-10 at 21 27 20](https://user-images.githubusercontent.com/3459374/43974995-d5b510c6-9ce4-11e8-83f4-6eb8c6d7c620.png)

### Reply to tweet

![screen shot 2018-08-10 at 21 28 13](https://user-images.githubusercontent.com/3459374/43974992-d57631c6-9ce4-11e8-9043-e4ed2f6392dd.png)

### Single tweet view

![screen shot 2018-08-10 at 21 29 36](https://user-images.githubusercontent.com/3459374/43974993-d5957bf8-9ce4-11e8-8090-9306049f6c92.png)

## License

MIT © [Denys Dovhan](//denysdovhan.com)
