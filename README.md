# Episub Typescript Base

This is a bootstrap repo designed to formalise the recommended way to build single page client side applications at Episub.

## Bugs

In the console when the site is first opened React 16.3 will report "unsafe legacy lifecycles". This is due to react-hot-loader and can be ignored. A future update to react-hot-loader should fix this.

## TODO

* Implement a React ErrorBoundary example
* Improve method of displaying dynamic content in the toolbar
* Make the drawer hide when the screen size is very small (and use a toolbar button to show/hide)
* Create individual pages for demoing each library in use by the boilerplate with documentation for the examples written on those pages rather than relying on documentation in the readme

## Adding new packages

This setup comes with a set of standard packages recommended for using to build a client side application. If you wish to add more make sure you include type definitions for any dependencies that don't include them by default.

## Build Setup

This repo is setup using Webpack 4. With babel + typescript loaders and separate vendor bundling. Details about each section in the config are listed below.

Note: Installing 'phantomjs' to the PATH on your local system can significantly increase the speed of yarn actions that involve installing or updating dependencies.

### Hot Reloading

Webpack runs in 'hot' mode when run through the `yarn start` command. Hot reloading allows for in place reloading of modified modules. By default the application is configured to use react-hot-loader to perform replacement of react components. This means updates can be compiled and inserted into the running website without reloading or losing the state of a react component. This does require a wrapper around your root react component. See [documentation](https://github.com/gaearon/react-hot-loader) for more details.

### devtool

The bundle is setup to use 'source-map' which will emit the source maps in a separate file. This is usable in both development and production as the separate source map can be used to trace errors to their associated lines in production code without having to make the source maps available to the public.

### Loaders

#### ts-loader

Webpack will load all `.ts` and `.tsx` files through ts-loader. The files will be transpiled from typescript into esnext javascript code and leave any jsx code untouched. `tsc` the typescript compiler will also perform type checking during this phase. If it finds any errors the whole webpack build will not succeed. These errors should appear both in the terminal running the `yarn start` command and in the console of any browsers connected to the webpack-dev-server.

#### babel-loader

All `.js` and `.jsx` files as well as the previously transpiled typescript will be transpiled into es5 javascript with any necessary polyfills in order the meet the target compatibility defined in the `.babelrc` file. See the [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) docs for more details about how this works.

#### html-loader

Emits the html files processed by the html plugin as part of our final bundle along with the javascript.

Note: If your html template includes images or links you may need additional loaders. See the [documentation](https://webpack.js.org/loaders/html-loader/) for additional detail if you require more options.

### Plugins

#### HTML

The HTML plugin adds the `<script>` tags for the javascript bundles into the html template.

#### Webapp

The Webapp plugin is used to generate favicons and configurations for pinning the application in various operating systems. The default configuration only generates normal icons for use by web browsers. The icon can be a `.png` or `.svg` file (svg is recommended).

See the [documentation](https://github.com/brunocodutra/webapp-webpack-plugin) for additional configuration options.

### Cache Chunks

Webpack 4 has a new configuration option that allow us to easily separate libraries we include into its own bundle allowing for faster client downloads, more efficient caching and faster build times in development.

Unless your application is very large webpack will produce two bundle.js files. One called `main.js` contains all the code contained in the `src` folder. The other bundle called `vendor.js` will include any node modules that have been imported by `main.js`.

## Scripts

`yarn start`: Run webpack-dev-server in development mode. Any changes to project files will trigger a rebuild (its recommended to set the save interval of your IDE to auto-save in intervals rather than immediately to avoid excessive builds).

`yarn dev`: Run webpack in development mode. Will build files in the `./dist` folder.

`yarn build`: Run webpack in production mode. Will build files in the `./dist` folder.

`yarn format-all`: Run prettier on all `.ts`,`tsx`,`.js`,`.jsx` and `.json` files in the project.

`yarn lint`: Scan the typescript files for lint errors and compile errors using tslint and tsc.

`yarn fix`: Tslint will attempt to fix any lint errors it knows how to auto-solve.

`yarn auto-upgrade`: Upgrade all dependencies to their latest version. (Remove this script when migrating this repo to an actual project)

## Visual Studio Code

### Recommended Extensions

[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Makes the 'Format Document' command in vscode use Prettier. Useful for formatting files without running the yarn scripts.

[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint): Get lint warnings highlighted in vscode. Also allows you to run the 'Fix all auto-fixable problems' command on the current file without having to run the yarn scripts.

[Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug): Enables debugging with Firefox.

[Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Enables debugging with Chrome.

[Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Some helpful spell checking (set language to en-GB in settings).

[TypeScript Hero](https://github.com/buehler/typescript-hero): Adds a number of useful features when working with typescript including a code outline view.

### Debugging

Visual Studio Code has good debugging tools that work well with this repo. Ensure that vscode has the 'Debugger for Chrome' or the 'Debugger for Firefox' extension installed. If on Linux make sure that `/usr/bin/google-chrome` points to an instance of google chrome on you machine (eg on Arch Linux: `ln -s /usr/bin/google-chrome-stable /usr/bin/google-chrome`). If using Firefox on Linux ensure that `firefox` or `firefox-developer` is on your path. The Firefox debugger extension will default to using the developer edition if it is installed.

Run your development instance like normal (`yarn start`) and set some breakpoints. Then open the debugger panel and run the 'Debug with Chrome' or 'Debug with Firefox' option (or press `F5`). This will open a new browser instance and any breakpoints reached by the browser will be captured by vscode.

Note: If a breakpoint for your code is immediately executed by the browser then it may be executed before the debugger can attach to the browser. You may need to refresh the page in the browser to catch such early breakpoints.

## Notes

* [Fork TS Checker Webpack Plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) does not function correctly. When in operation every second or sometimes every build the forked compiler will report missing modules (even though webpack can find and compile the bundle fine). In order to maintain build error consistency the plugin has been removed.
