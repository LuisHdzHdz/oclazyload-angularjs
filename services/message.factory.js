/**
 * Created by Andres on 27/03/2015.
 */
(function () {
    'use strict';
    angular
        .module('message.factory',[])
        .factory('messageFactory',messageFactory);
    messageFactory.$inject = ['$log','$http'];
    function messageFactory($log,$http){
        var factory =  {
            getMessages : getMessages
        };
        return factory;

        function getMessages(){
            var request = $http({
                method : 'get',
                url : 'http://jsonplaceholder.typicode.com/posts'
            });
            return request.then(function(response){
                return response.data;
            });
        }
    }
})();