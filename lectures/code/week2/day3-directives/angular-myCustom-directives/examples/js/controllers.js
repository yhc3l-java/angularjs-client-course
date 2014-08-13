'use strict';
angular.module('myExampleApp')
	.controller('MainCtrl', function ($scope) {
		$scope.people = [{
			firstname: 'Tom',
			surname: 'Blackmore',
			age: 38,
			employment: 'Consultant'
		}, {
			firstname: 'Fred',
			surname: 'Roobin',
			age: 49,
			employment: 'Nurse'
		}, {
			firstname: 'Ginny',
			surname: 'Weasley',
			age: 19,
			employment: 'Witch'
		}];
		$scope.alertName = function (person) {
			alert('Hi ' + person.firstname);
		}
	});