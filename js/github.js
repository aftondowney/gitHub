var apiKey = "bfdbd359881cd480c6f707524c2a72e07a03a6cc";

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    // console.log(JSON.stringify(response));
    var responseArray = Object.keys(response).map(function(k) {
      return response[k];
    });
    console.log(responseArray);
    responseArray.forEach(function() {
      $('.showRepositories').html("<p>Here are the public repositories for " + username + ":</p><ul><li>" + responseArray['name'] + "</li><ul><li>" + responseArray['description'] + "</li></ul></ul>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
