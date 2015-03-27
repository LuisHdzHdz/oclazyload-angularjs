/**
 * Created by AVillanueva on 27-03-2015.
 */
(function(){
    'use strict';
    angular
        .module('AppHome')
        .controller('HomeController',HomeController);
    HomeController.$inject = ['$log'];
    function HomeController($log){
        $log.debug('cargo HomeController');
    }


})();