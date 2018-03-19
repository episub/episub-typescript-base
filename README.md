# Episub Typescript Base

This is a bootstrap repo designed to formalise the recommended way to build
client side applications at Episub.

## Adding new packages

This setup comes with a set of standard packages recommended for using to build
a client side application. If you wish to add more make sure you include type
definitions for any dependencies that don't include them by default.

## Build Setup

## Scripts

`yarn start`: Run webpack-dev-server in development mode. Any changes to project
files will trigger a rebuild (its recommended to set the save interval of your
IDE to auto-save in intervals rather than immediately to avoid excessive builds).

`yarn dev`: Run webpack in development mode. Will build files in the `./dist`
folder.

`yarn build`: Run webpack in production mode. Will build files in the `./dist`
folder.

`yarn format-all`: Run prettier on all `.ts`,`tsx`,`.js`,`.jsx` and `.json`
files in the project.

`yarn lint`: Scan the typescript files for lint errors using tslint.

`yarn fix`: Tslint will attempt to fix any lint errors it knows how to
auto-solve.

## Visual Studio Code

### Recommended Extensions

[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):
Makes the 'Format Document' command in vscode use Prettier. Useful for
formatting files without running the yarn scripts.

[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): Get
lint warnings highlighted in vscode. Also allows you to run the 'Fix all
auto-fixable problems' command on the current file without having to run the
yarn scripts.

[Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug):
Enables debugging with Firefox.

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome):
Enables debugging with Chrome.

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker):
Some helpful spell checking (set language to en-GB in settings).

### Debugging

Visual Studio Code has good debugging tools that work well with this repo.
Ensure that vscode has the 'Debugger for Chrome' or the 'Debugger for Firefox'
extension installed. If on Linux make sure that `/usr/bin/google-chrome` points
to an instance of google chrome on you machine (eg on Arch Linux: `ln -s
/usr/bin/google-chrome-stable /usr/bin/google-chrome`). If using Firefox on
Linux ensure that `firefox` or `firefox-developer` is on your path. The Firefox
debugger extension will default to using the developer edition if it is
installed.

Run your development instance like normal (`yarn start`) and set some
breakpoints. Then open the debugger panel and run the 'Debug with Chrome' or
'Debug with Firefox' option (or press `F5`). This will open a new browser
instance and any breakpoints reached by the browser will be captured by vscode.

Note: If a breakpoint for your code is immediately executed by the browser then
it may be executed before the debugger can attach to the browser. You may need
to refresh the page in the browser to catch such early breakpoints.

## TODO

- Implement happypack to multithread loaders. This might not be possible with
  nested loaders but worth checking out when code base gets larger.