(function(suggestionsController) {

    var data = require('../data');
    suggestionsController.init = function(app) {
        app.get('/api/suggestions/:day', function (req, res) {

            var day = req.params.day;
            data.getRestaurants(day, function (err, restaurants) {
                if (err) {
                    res.send(400, err); // expand later
                } else {
                    res.set('Content-Type', 'application/json');
                    res.send(restaurants);
                }
            });
            
        });
    };
})(module.exports)