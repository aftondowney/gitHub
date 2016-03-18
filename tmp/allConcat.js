 var getRepos = require('./../js/github.js').getRepos;
 // var getRepoNum = require('./../js/github.js').getRepoNum;

$(document).ready(function() {

  $('#repositories').click(function(response) {
    var name = $('#name').val();
    $('#name').val("");
    // var repoNumber = getRepoNum;

    getRepos(name);


  });
});
