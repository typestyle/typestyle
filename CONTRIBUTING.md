# Setup
```
git clone https://github.com/typestyle/typestyle.git
npm i
```

# Dev 

```
npm start
```

# Releasing
* Think if your change is `major (breaking api) / minor (potentially breaking but you tried your best not to) / patch (safe)`.
* See current version in `package.json` and update `CHANGELOG.md` adding the *planned release version* notes.
* Commit all your changes (including changelog)
* Run `npm version major|minor|patch`. It will automatically push to github, run `npm publish` on your behalf.
