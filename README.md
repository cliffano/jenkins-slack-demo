<img align="right" src="https://raw.github.com/cliffano/jenkins-slack-demo/master/avatar.jpg" alt="Avatar"/>

Jenkins Slack Demo
-------------------

Demo project for [Jenkins CI](http://jenkins-ci.org) and [Slack](https://slack.com) integration using Google Cloud Functions as the webhooks and [swaggy-jenkins](https://www.npmjs.com/package/swaggy-jenkins) node.js library.

[![Architecture Diagram](https://raw.github.com/cliffano/jenkins-slack-demo/master/screenshot.jpg)](https://raw.github.com/cliffano/jenkins-slack-demo/master/screenshot.jpg)

Architecture
------------

[![Architecture Diagram](https://raw.github.com/cliffano/jenkins-slack-demo/master/architecture.jpg)](https://raw.github.com/cliffano/jenkins-slack-demo/master/architecture.jpg)

| Component               | Description                                                                         |
|-------------------------|-------------------------------------------------------------------------------------|
| slack-outgoing-webhooks | Sample configuration values and icon image                                          |
| cloudfunctions-webhooks | Google Cloud Functions serving as Slack webhooks which proxy requests to Jenkins CI |
| jenkins-data            | Jenkins jobs configuration files and Jenkinsfile                                    |

Installation
------------

Requirements:

* Install [Serverless](https://serverless.com/), used for managing Jenkins Slack webhooks
* Install [Nestor](https://github.com/cliffano/nestor), used for creating Jenkins jobs

Download Jenkins Slack Demo code:

    git clone https://github.com/cliffano/jenkins-slack-demo

Configuration
-------------

Configure `slackToken` and `jenkinsUrl` in `cloudfunctions-webhooks/conf.json` .

Set `JENKINS_URL` environment variable in the form of `<protocol>://<username>:<password>@<host>:<port>` .

Usage
-----

Create Jenkins jobs:

    make create-jenkins-jobs

Deploy Jenkins Cloud Functions webhooks:

    make deps deploy-cloudfunctions-webhooks

Login to Slack and create [outgoing webhooks](https://api.slack.com/custom-integrations/outgoing-webhooks) using sample values in `slack-outgoing-webhooks/config.txt` as a guideline.

Colophon
--------

Presentations:

* TODO

Related Projects:

* [swaggy-jenkins](http://github.com/cliffano/swaggy-jenkins) - A set of Jenkins API clients in multiple languages generated from Swagger / Open API specification
