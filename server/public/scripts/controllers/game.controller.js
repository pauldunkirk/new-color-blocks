colorBlocks.controller('GameController', ['$http', 'DataFactory', function($http, DataFactory) {
console.log('game controller running');

var self = this;
self.colors = DataFactory.getColors;
console.log(self.colors); //object with property 'list' which is an array of objects, color_name is one property
// console.log(self.colors.color_name);
//
// self.taskList = TaskFactory.allTasks;
// <div ng-repeat="task in tc.taskList.list" ng-class="{complete: task.status, active: !task.status}">
//   <!-- {{task.name}} and the id number is {{task.id}} -->
//   {{tc.toView}} {{task.name}}

// self.colors = DataFactory.getColors;
//   <div ng-repeat="color_name in game.colors.list" ng-class="{complete: task.status, active: !task.status}">
//     <!-- {{colors.color_name}} and the id number is {{colors.id}} -->
//     {{tc.toView}} {{color.color_name}}


// start game
init();

// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?';
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
  }
};

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
