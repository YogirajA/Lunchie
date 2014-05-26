(function (data) {

    var seedData = require('./seedData');
    data.getRestaurants = function (day, next) {
        //send data based on day
        next(null, seedData.restaurants);
    };


})(module.exports);