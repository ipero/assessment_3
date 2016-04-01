myApp.controller("AddController", ["$scope", "$http", "HeroService", function($scope, $http,
   HeroService){
    //$scope.movies = {};
    $scope.data = [];

    $scope.addHero = function(data){
        console.log(data);

        var postObject = {};
        postObject.alias = data.alias;
        postObject.first_name = data.first_name;
        postObject.last_name = data.last_name;
        postObject.city = data.city;
        postObject.power_name = data.power_name;

        HeroService.postHero(postObject);
    };
}]);

myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
    HeroService.getHeroes();

    $scope.deleteHero = HeroService.deleteHero;
    $scope.data = HeroService.data;
}]);
