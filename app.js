(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  $scope.lunchitems = '';

  $scope.lunchMenu = function(){

   if($scope.lunchitems.length === 0){

        $scope.message = "Please enter data first!";

    }else{

         var myString = $scope.lunchitems;

         var array = myString.split(',');

         var number = 0;
         for(var i=0; i<array.length; i++) {

            $scope.nospaces = array[i].replace(/ /g, '');

            if( $scope.nospaces !== "") {

              number = number + 1;

             }
           }


           if( number > 3){

                $scope.message ="Too Much!";

             }else {

                $scope.message = "Enjoy!";

             }

    }

  };

}

})();
