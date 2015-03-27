/**
 * Created by AVillanueva on 27-03-2015.
 */
(function(){
    'use strict';
    angular
        .module('app')
        .config(Routes);

    Routes.$inject = ['$stateProvider'];
    function Routes($stateProvider){
        $stateProvider
            .state('home',{
                url : '/home',
                controller : 'HomeController',
                templateUrl : 'home/index.html',
                resolve : {
                    home : function($ocLazyLoad){
                        return $ocLazyLoad.load({
                            name : 'AppHome',
                            files : [
                                'home/home.js',
                                'home/home.controller.js'
                            ]
                        })
                    }
                }
            })
            .state('profile',{
                url : '/profile',
                templateUrl : 'profile/index.html',
                resolve : {
                    profile : function($ocLazyLoad){
                        return ozLazyLoad.load({
                            name : 'AppProfile',
                            files : [
                                'profile/profile.js',
                                'profile/profile.controller.js'
                            ]
                        })
                    }
                }
            })
            .state('message',{
                url : '/message',
                templateUrl : 'message/index.html',
                resolve : {
                    message : function($ocLazyLoad){
                        return ozLazyLoad.load({
                            name : 'AppMessage',
                            files : [
                                'message/message.js',
                                'message/message.controller.js'
                            ]
                        })
                    }
                }
            })
    }
})();