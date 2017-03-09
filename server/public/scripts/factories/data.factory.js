colorBlocks.factory('DataFactory', ['$http', function($http) {
  // console.log("data factory running");

  // var colors = ['red', 'blue', 'magenta', 'green', 'pink'];
  var colorsList = { list: []};

  console.log(colorsList); //

  getDBColors();

  function getDBColors() {
  $http({
    method: 'GET',
    url: '/colors'
  }).then(function(response) {
    // console.log('response from factory',  response); //response is object, .data is array
    console.log('response.data from database', response.data); //long array
    colorsList.list = response.data; // response.data is array of objects each with color_name property
    console.log('colorsList', colorsList); //object with property 'list' which is an array of objects, color_name is one property
    console.log('colorsList.list', colorsList.list); //array of objects, same as response.data
  });
}
    return  {
      getColors: colorsList
    };
}]);
