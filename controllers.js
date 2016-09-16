angular.module('vpApp', [])

.controller('vpCtrl', ['$scope', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $http) {
        console.log("vpCtrl start!");
        var vp = this;
        vp.Plan = [];

        $http
            .get('http://www.plaene.iks.bullencode.de/json/schuelerPlan.json' + '?random=' + Math.random()) //.get('http://www.plaene.iks.bullencode.de/json/Plan.json')
            .finally(function () {
                $scope.lade = true;
            })
            .then(function (result) {
                vp.Plan = result.data;
                $scope.lade = false;
                console.log(vp.Plan);
            })
            .catch(function (daten) {
                alert('Ladefehler.')
            })


}])
