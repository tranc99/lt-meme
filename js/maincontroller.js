function SimpleController($scope) {
	$scope.customers = [
		{name:'John Kundiso', city:'Guruve'},
		{name:'John Smith', city:'Amsterdam'},
		{name:'Ten Mutunhire', city:'Marondera'},
		{name:'Smriti Lall', city:'Phnom Penn'}
	];
}
demoApp.config(function ($routeProvider) {
    $routeProvider
	.when('/',
	    {
		controller: 'SimpleController',
		templateUrl: 'Partials/View1.html'
	    })
	.when('/partial2',
	    {
		controller: "SimpleController",
		templateUrl: "Partials/View2.html"
	    })
	.otherwise({	redirectTo: "/" });
});
demoApp.controller(SimpleController);