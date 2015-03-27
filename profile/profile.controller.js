/**
 * Created by AVillanueva on 27-03-2015.
 */
(function(){
    'use strict';
    angular
        .module('AppProfile')
        .controller('ProfileController',ProfileController);
    ProfileController.$inject = ['$log'];
    function ProfileController($log){
        $log.debug('cargo ProfileController');
    }


})();