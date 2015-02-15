define([
    'jquery',
    'react',
    'jsx!../views/app'

], function($, React, App) {
    // this is responsible for loading the entire front end application
    React.render(new App(), $('body')[0]);
});
