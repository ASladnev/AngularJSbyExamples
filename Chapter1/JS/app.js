/**
 * Created by Slyadnev on 13.05.2015.
 */
angular.module ('app', [])
  .controller ('GuessTheNumberController', ['$scope',
    function ($s) {
      $s.verifyGuess = function () {
        $s.deviation = $s.original - $s.guess;
        $s.noOfTries++;
      };

      $s.initializeGame = function () {
        $s.noOfTries = 0;
        $s.original = Math.floor((Math.random() * 1000) + 1);
        $s.guess = $s.deviation = null;
      };

      $s.initializeGame ();
    }]);