This project aims to provide a quick way to get started with WebAssembly.

* clean separation between WebAssembly and JavaScript code, with easy interop
* automated and reproducible build for wasm binaries using `Make` and `emsdk`
* Webpack/ES6 support out of the box with no configuration

It was bootstrapped using the amazing [Create React App](https://github.com/facebookincubator/create-react-app). This means all the boilerplate is pushed to its dependencies (think webpack config, babel etc.), it comes with sensible defaults and everything just works™.

Please fork and happy hacking!

To see a more complex project built on the same skeleton take a look at [__color-automata__](https://github.com/cimi/color-automata) (a colourful cellular automaton implemented with WebAssembly).

## How it works

### Building the wasm binary and loader

You need to have emsdk installed in order to build the wasm modules. The project uses the JS module output from emscripten in order to load and run the wasm code.

Since emsdk is (still) dependent on node v4, that causes problems for CRA/yarn/ES6 projects as it's missing features so you won't be able to build the wasm module and the JS bundle in the same shell.

To build the WebAssembly module and JavaScript wrapper, run:

```bash
activate-emsdk
npm run build-wasm
```

The `Makefile` build produces the following artifacts:

* a WebAseembly binary in `public/` (made available as a regular file for the dev server or production build)
* a JavaScript module in `src/` which contains logic to load the binary so its code can be invoked from JS

Since eslint runs by default on all JS sources, the module needs a disabling comment prepended to it - also taken care of by the Makefile.

The dev server does not use the correct mime type for the wasm binary so you will see a warning logged to the console ('Incorrect response MIME type. Expected 'application/wasm'). This does not affect functionality in any way.

If you have the Webpack dev server running when you build the wasm JavaScript wrapper you will need to restart the server. The build command deletes then re-creates the JS file and the dev server doesn't like that very much.

### Loading the emsdk environment

The emsdk distribution comes with a useful shell script that sets up everything you need in order to build wasm binaries and JS modules in the terminal. You can create an alias to make this step easier:

```bash
alias activate-emsdk="source ~/code/emsdk/emsdk_env.sh"
```
