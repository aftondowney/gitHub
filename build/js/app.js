(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
 var getRepos = require('./../js/github.js').getRepos;
 // var getRepoNum = require('./../js/github.js').getRepoNum;

$(document).ready(function() {

  $('#repositories').click(function(response) {
    var username = $('#name').val();
    $('#name').val("");
    // var repoNumber = getRepoNum;

    getRepos(username);


  });
});

},{"./../js/github.js":1}]},{},[2]);
