demoApp.factory('simpleFactory', function() {
    var factory = {};
    var customers = [
		{name:'John Kundiso', city:'Guruve'},
		{name:'John Smith', city:'Amsterdam'},
		{name:'Ten Mutunhire', city:'Marondera'},
		{name:'Smriti Lall', city:'Phnom Penn'},
		{name:'Jon Kuso', city:'Lapland'},
		{name:'Jimmy Smit', city:'Harare'},
		{name:'Oscar Wilde', city:'Hyderabad'},
		{name:'Kafka Herzog', city:'Seoul'}
	];
	factory.getCustomers = function () {
	    return customers;
	};
	return factory;
})

function SimpleController($scope) {
	$scope.customers = 
	
	$scope.addCustomer = function () {
	    $scope.customers.push(
	    {
		name: $scope.newCustomer.name,
		city: $scope.newCustomer.city
	    });
	};
}
demoApp.config(function ($routeProvider) {
    $routeProvider
	.when('/',
	    {
		controller: 'SimpleController',
		templateUrl: 'Partials/View1.html'
	    })
	.when('/view2',
	    {
		controller: "SimpleController",
		templateUrl: "Partials/View2.html"
	    })
	.otherwise({	redirectTo: "/" });
});
demoApp.controller(SimpleController);