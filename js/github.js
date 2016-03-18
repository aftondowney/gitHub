var apiKey = "bfdbd359881cd480c6f707524c2a72e07a03a6cc";
var repos;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    repos = response;
    if(repos.length == 0) {
      $('.showRepositories').html("<p>No repos!</p>");
    } else {
        $('.showRepositories').html("<p><h3>Here are the public repositories for " + username + ":</h3></p>");
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


// var repositories;
//  $.getJSON(repouri, function(json){
//    repositories = json;
//    outputPageContent();
//  });
//
//  function outputPageContent() {
//    if(repositories.length == 0) { outhtml = outhtml + '<p>No repos!</p></div>'; }
//    else {
//      outhtml = outhtml + '<p><strong>Repos List:</strong></p> <ul>';
//      $.each(repositories, function(index) {
//        outhtml = outhtml + '<li><a href="'+repositories[index].html_url+'" target="_blank">'+repositories[index].name + '</a></li>';
//      });
//      outhtml = outhtml + '</ul></div>';
//    }
//    $('#ghapidata').html(outhtml);
//  } // end outputPageContent()
// } // end else statement
// }); // end requestJSON Ajax call
// }); // end click event handler
