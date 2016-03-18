 var getRepos = require('./../js/github.js').getRepos;
 // var getRepoNum = require('./../js/github.js').getRepoNum;

$(document).ready(function() {

  $('#repositories').click(function(event) {
    event.preventDefault();

    var username = $('#name').val();
    $('#name').val("");
    // var repoNumber = getRepoNum;

    getRepos(username);


  });
});
