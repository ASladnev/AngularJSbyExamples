/**
 * Created by Slyadnev on 13.05.2015.
 */
angular.module ('7minWorkout')
  .filter ('secondsToTime', function  () {
    return function (input) {
      //console.log (input);
      var sec = parseInt (input);
      if (isNaN (sec)) return "00:00:00";
      var hours = Math.floor (sec / 3600);
      var minutes = Math.floor((sec - (hours * 3600)) / 60);
      var seconds = sec - (hours * 3600) - (minutes * 60);


      return ("0" + hours).substr(-2) + ':'
        + ("0" + minutes).substr(-2) + ':' + ("0" + seconds).substr(-2);
    }
  });