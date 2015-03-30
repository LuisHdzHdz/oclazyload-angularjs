/**
 * Created by Andres on 27/03/2015.
 */
(function(){
    'use strict';
    angular
        .module('AppMessage')
        .controller('MessageController',MessageController);
    MessageController.$inject = [
        '$log',
        'messageFactory',
        'usersFactory'
    ];
    function MessageController($log,messageFactory,usersFactory){
        $log.debug('cargo MessageController');
        var vm = this;
        vm.defecto = 10;// Número de mensajes por defecto

        messages();
        users();

        function messages(){
            return messageFactory.getMessages()
                .then(function(data){
                    vm.messages = data;
                    return vm.messages;
                })
                .catch(function(error){
                    alert('Algo malo ocurrio con los mensajes! '+error);
                });
        }

        function users(){
            return usersFactory.getUsers()
                .then(function (data) {
                    vm.users = data;
                    return vm.users;
                })
                .catch(function(error){
                    alert('Algo malo ocurrio con los usuarios! '+error);
                });
        }
    }


})();