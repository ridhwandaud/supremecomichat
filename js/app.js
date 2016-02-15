(function (){
    
    var app = angular.module("comichat",[
        "ngRoute",
        "mainControllers"
        ]);
    
    app.config(function($routeProvider,$locationProvider)
    {
        $routeProvider
            .when("/main",
            {
                templateUrl:"templates/main.html",
                controller:"MainController"
            })
            .when("/mengenai",
            {
                templateUrl:"templates/mengenai.html",
                controller:"MainController"
            })
            .when("/komik",
            {
                templateUrl:"templates/komik.html",
                controller:"SiriListCtrl"
            })
            .when('/komik/siri/:namaSiri', {
                templateUrl: 'templates/siriDetails.html',
                controller: 'SiriDetailCtrl'
            })
            .when("/pengkarya",
            {
                templateUrl:"templates/pengkarya.html",
                controller:"AretisListCtrl"
            })
            .when("/sms",
            {
                templateUrl:"templates/sms.html",
                controller:"SmsCtrl"
            })
            .otherwise({redirectTo:"/main"});

            /*$locationProvider.html5Mode(true);*/
    });
    
}());