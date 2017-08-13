'use strict';

const conf   = require('./conf.json');
const Swaggy = require('swaggy-jenkins');
const util   = require('util');

const slackToken   = conf.slackToken;
const jenkinsUrl   = conf.jenkinsUrl;
const organization = 'jenkins';
const blueOceanApi = new Swaggy.BlueOceanApi();

blueOceanApi.apiClient.basePath = jenkinsUrl;

exports.replay_pipeline = (request, response) => {
  if (request.body.token !== slackToken) {
    var payload = { text: util.format('Invalid token %s', request.body.token) };
    response.status(200).send(payload);
  } else {
    var parts = request.body.text.match(/jenkins: replay pipeline (.*) run (.*)/);
    if (!parts) {
      var payload = { text: util.format('Invalid command %s', request.body.text) };
      response.status(200).send(payload);
    } else {
      var pipeline = parts[1];
      var run      = parts[2];

      function cb(err, data, result) {
        if (err) {
          var payload = { text: err.message };
          response.status(200).send(payload);
        } else {
          var payload = { text: util.format('Pipeline %s has been replayed with run ID %d', data.pipeline, data.id) };
          response.status(200).send(payload);
        }
      };

      blueOceanApi.postPipelineRun(organization, pipeline, run, cb);
    }
  }
};

exports.event = (event, callback) => {
  callback();
};
