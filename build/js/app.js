(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "bfdbd359881cd480c6f707524c2a72e07a03a6cc";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/github.js":2}]},{},[3]);
