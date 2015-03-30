/**
 * Created by AVillanueva on 30-03-2015.
 */
(function () {
    'use strict';
    angular
        .module('users.factory',[])
        .factory('usersFactory',usersFactory);
    usersFactory.$inject = ['$log','$http'];
    function usersFactory ($log, $http){
        var factory = {
            getUsers : getUsers
        };
        return factory;

        function getUsers(){
            var request = $http({
                method : 'get',
                url : 'http://jsonplaceholder.typicode.com/users'
            });
            
            return request.then(function (response) {
                return response.data;
            })
        }
    }
})();