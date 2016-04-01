myApp.factory("HeroService", ["$http", function($http){
    var data = {};

    var postHero = function(data){
        $http.post("/heroes", data).then(function(response){
            console.log("Hero SAVED! ", response);
            getHeroes();
        });
    };

    var getHeroes = function(){
        $http.get("/heroes").then(function(response){
            data.response = response.data;
        });
    };

    var deleteHero = function(data){
          console.log(data);
          $http.delete("/heroes/" + data).then(function(response){
          getHeroes();
      });
    }

    return {
        postHero : postHero,
        getHeroes : getHeroes,
        deleteHero : deleteHero,
        data : data
    };
}]);
