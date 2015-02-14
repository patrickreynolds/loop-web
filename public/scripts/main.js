define([
    'jquery',
    'react',
    'jsx!../views/App'

], function($, React, App) {
    React.render(new App(), $('body')[0]);
});
