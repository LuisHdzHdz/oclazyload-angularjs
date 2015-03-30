/**
 * Created by Andres on 27/03/2015.
 */
(function(){
    'use strict';
    angular
        .module('AppMessage',[
            {
                name : 'message.factory',
                files : ['services/message.factory.js']
            },
            {
                name : 'users.factory',
                files : ['services/users.factory.js']
            }
        ]);
})();