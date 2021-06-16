## Requiring modules
- node uses 2 core modules for managing module dependencies, both are available on global scope
    - require - command to require deps
    - module - organizer of all required modules
- steps when require function with local file path is invoked
    - resolving - find absolute path of the file
    - loading - determine the type of the file content
    - wrapping - give the file private scope
    - evaluating - vm do smt with loaded code
    - caching - we dont need to go all steps again

### module
```
require("find-me") // without specifying a path
```
it will look for 'find-me.js' in all paths specified by module.paths

modules don't have to be files, we can require directories too.
index.js is used by default, we can change that file name in package.json file, using main property

## Resolve only
- if you want to only resolve the module and not execute it, you can use the require.resolve function.
- require.resolve behaves exactly the same as the main require, but it doesn't load the file.
- this can be used to check optional package is installed or not, and only use it when it's available

## Parent-child relation b/n files


module.exports object es what the require function returns


- loaded attribute on every module.
**module** module uses the loaded attribute to track which modules have been loaded and which modules are still being loaded (false value)


the **exports** object becomes complete when node finishes loading the module (and labels it so). the whole process of requiring/loading a module is **synchronous** -> this means that we can't change exports object asynchronously

## Circular Module Dependency
- module1 requires module2 and module2 requires module1