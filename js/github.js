var apiKey = "bfdbd359881cd480c6f707524c2a72e07a03a6cc";

exports.getRepos = function(name){
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    $('.showRepositories').text("Here are the " + response.public_repos + " public repositories for " + name + ":");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
