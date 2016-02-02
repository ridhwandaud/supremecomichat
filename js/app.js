(function (){
    
    var app = angular.module("comichat",["ngRoute"]);
    
    app.config(function($routeProvider)
    {
        $routeProvider
            .when("/main",
            {
                templateUrl:"main.html",
                controller:"MainController"
            })
            .when("/mengenai",
            {
                templateUrl:"mengenai.html",
                controller:"MainController"
            })
            .when("/komik",
            {
                templateUrl:"komik.html",
                controller:"MainController"
            })
            .when("/pengkarya",
            {
                templateUrl:"pengkarya.html",
                controller:"MainController"
            })
            .otherwise({redirectTo:"/main"});
    });
    
}());