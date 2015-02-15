require.config({
  baseUrl: 'public/scripts/',

  paths: {
    lodash: 'lib/lodash.min',
    jquery: 'lib/jquery',
    react: 'lib/react',
    JSXTransformer: 'lib/JSXTransformer',
    socketio: 'lib/socket.io.min',
    text: 'lib/text',
    main: 'main',
    jsx: 'lib/jsx',
    propertyParser: 'lib/requirejs-plugins/src/propertyParser',
    font: 'lib/requirejs-plugins/src/font'
  },

  jsx: {
    fileExtension: '.jsx'
  }
});