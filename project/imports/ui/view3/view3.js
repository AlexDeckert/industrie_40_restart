import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './view3.html';
import angularCharts from 'angular-chart.js';


const name = 'view3';

class View3 {
    constructor($interval, $scope) {
        'ngInject';

    }
}

// create a module
export default angular.module(name, [
    angularMeteor,
    angularCharts,
    uiRouter
]).component(name, {
    template,
    controllerAs: name,
    controller: View3
})

    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('view3', {
            url: '/spectral',
            template: '<view3></view3>'
        });
}