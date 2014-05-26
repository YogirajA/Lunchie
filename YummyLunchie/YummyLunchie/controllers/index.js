(function (controllers) {

    //var homeController = require('./homeController');
    var suggestionsController = require('./suggestionsController.js');
    controllers.init = function (app) {
        //homeController.init(app);
        suggestionsController.init(app);
    };

})(module.exports);