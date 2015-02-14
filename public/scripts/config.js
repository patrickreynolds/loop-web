require.config({
  baseUrl: 'public/scripts/lib',

  paths: {
    lodash: 'lodash.min',
    jquery: 'jquery',
    react: 'react-with-addons.min',
    JSXTransformer: 'JSXTransformer',
    socketio: 'socket.io.min',
    text: 'text',
    main: '../main'
  },

  jsx: {
    fileExtension: '.jsx'
  }
});