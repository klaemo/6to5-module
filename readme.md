# module boilerplate for use with babel (6to5)

Inspired by [@timoxley](https://github.com/timoxley).

Take a look at the `package.json`'s `scripts` field to see how it's set up.

## Workflow

You write your module in `index.js` as usual. It should later compile to plain ES5 as `module-name.js` which is set as `main` entrypoint for your module (this is what will get `require()`d by other modules)

- `npm run babel` compiles `index.js` -> `module-name.js` (pass options to `babel` like `npm run babel -- -h`)
- `npm run watch` watches and compiles `index.js` -> `module-name.js`

Also automatically compiles before `npm publish` and before `npm test`.
