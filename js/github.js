var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  var repos;
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    repos = response;
    if(repos.length == 0) {
      $('.showRepositories').html("<p>No repos!</p>");
    } else {
      $('.showRepositories').html("<p><h3 class='intro'>Here are the public repositories for " + username + ":</h3></p>");
      $.each(repos, function(index) {
        if(repos[index].description == 0) {
          $('.showRepositories').append("<ul><li class='name'>" + repos[index].name + "</li>");
        } else {
          $('.showRepositories').append("<ul><li class='name'>" + repos[index].name + "</li><ul><li>" + repos[index].description + "</li></ul></ul>");
        }
      });
    }
  }).fail(function(error){
    $('.showRepositories').text("User " + error.responseJSON.message);
  });
};
