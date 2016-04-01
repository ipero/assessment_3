myApp.controller("AddController", ["$scope", "$http", "HeroService", function($scope, $http,
   HeroService){
    $scope.data = [];
    $scope.hero = {};
    $scope.addHero = function(data){
        console.log(data);
        HeroService.postHero(data);
        $scope.hero = {};
    };
}]);

myApp.controller("ShowController", ["$scope", "HeroService", function($scope, HeroService){
    HeroService.getHeroes();

    $scope.deleteHero = HeroService.deleteHero;
    $scope.data = HeroService.data;
}]);
