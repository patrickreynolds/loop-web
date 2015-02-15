define([
    'jquery',
    'react',
    'jsx!views/app'

], function($, React, App) {
    App = React.createFactory(App);

    // this is responsible for loading the entire front end app
    React.render(new App(), $('body')[0]);
});
