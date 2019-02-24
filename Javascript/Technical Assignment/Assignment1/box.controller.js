var Module = angular.module("myApp",[]);
            
Module.controller("boxController", function($scope) {
    $scope.boxParts = [];

    for(var i=0;i<4;i++) {
        $scope.boxParts.push([]);
        for(var j=0;j<4;j++) {
            $scope.boxParts[i].push([]);
        }
    }

    $scope.onBoxClick = function(parentIndex, currentIndex) {
        var currentBox = document.getElementById(parentIndex+"_"+currentIndex);
        var leftBox = document.getElementById(parentIndex+"_"+parseInt(currentIndex-1));
        var rightBox = document.getElementById(parentIndex+"_"+parseInt(currentIndex+1));
        var topBox = document.getElementById(parentIndex-1+"_"+currentIndex);
        var bottomBox = document.getElementById(parentIndex+1+"_"+currentIndex);
        
        if(currentBox.className  != "selectedSquare") {
            if(leftBox && rightBox && topBox && bottomBox) {
                if(leftBox.className == "defaultSquare" && rightBox.className == "defaultSquare" && topBox.className == "defaultSquare" && bottomBox.className == "defaultSquare") {
                    currentBox.className  = "selectedSquare";            
                }
            }
        } else {
            currentBox.className  = "defaultSquare"
        }
    }

});