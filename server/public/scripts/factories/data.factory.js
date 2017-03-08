colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");

  var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  console.log(colors);
  
    return  {
      getColors: colors
    };
}]);
