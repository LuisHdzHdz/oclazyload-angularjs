/**
 * Created by Andres on 27/03/2015.
 */
(function(){
    'use strict';
    angular
        .module('AppMessage')
        .controller('MessageController',MessageController);
    MessageController.$inject = ['$log','messageFactory'];
    function MessageController($log,messageFactory){
        $log.debug('cargo MessageController');
        var vm = this;
        vm.defecto = 10;// Número de mensajes por defecto
        messages();

        function messages(){
            return messageFactory.getMessages()
                .then(function(data){
                    vm.messages = data;
                    return vm.messages;
                })
                .catch(function(error){
                    alert('Algo malo ocurrio! '+error);
                });
        }
    }


})();