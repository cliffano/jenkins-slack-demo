deps:
	npm install -g serverless

create-jenkins-jobs:
	nestor create-job "Pipeline Job" jenkins-data/job_config_pipeline.xml

delete-jenkins-jobs:
	nestor delete-job "Pipeline Job"

deploy-cloudfunctions-webhooks:
	cd cloudfunctions-webhooks && serverless deploy

delete-cloudfunctions-webhooks:
	cd cloudfunctions-webhooks && serverless remove

.PHONY: deps create-jenkins-jobs delete-jenkins-jobs deploy-cloudfunctions-webhooks delete-cloudfunctions-webhooks
