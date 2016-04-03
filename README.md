# Redux-Iso

A starting template to make cool isomorphic applications based on [Redux](https://github.com/reactjs/redux) framework.

## Underlying technologies
* Expess.js
* Redux
* React
* React-Redux
* Socket.io
* Gulp
* Webpack
* Babel

## How to use
```
git clone https://github.com/MGrin/redux-iso.git
cd redux-iso
npm install
gulp
```

## Structure
```
redux-iso/
    |-- dist/                           # Compiled and webpacked files
    |-- src/                            # All Source files are here. They are then compiled and webpacked into dist/ folder
    |    |-- client/                   # Only client-related code
    |    |    |-- components/   # React components that will be rendered 
    |    |    |-- containers/      # React-Redux containers
    |    |    |-- index.js           # Entry point to the client-side part of application
    |    |    -
    |    |
    |    |-- server/                 # Only server-related code
    |    |    |-- config/            # Configs for Express.js and other stuff
    |    |    |-- views/             # Server-side views that are rendered by Express
    |    |    |-- index.js          # Entry point to the server-side code
    |    |    -
    |    |
    |    |-- common/            # Code that will be shared between server and client (mostly redux stuff)
    |    |    |-- actions/          # Redux actions
    |    |    |-- connectors/   # Connectors. Now only sockets are supported
    |    |    |-- middlewares/ # Redux middlewares
    |    |    |-- reducers/       # Redux reducers
    |    |    -
    |
    |-- gulpfile.js                 # Gulpfile to compile all that stuff
```

## How does it work?

Every time the action is dispatched, it is sent through Connector on the other side. For example, if the action is dispatched in browser, it is sent to server through sockets with field "source" = "client", and vice versa.

You can add your connectors if you need it (Long pooling for example).
Other structure is the normal structure of the redux app - in `src/common` you have all reducers, actions, middlewares and all other stuff