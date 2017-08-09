deps:
	echo "TODO"

create-jenkins-jobs:
	nestor create-job "Pipeline Job" jenkins-data/job_config_pipeline.xml

delete-jenkins-jobs:
	nestor delete-job "Pipeline Job"

deploy-cloudfunctions-webhooks:
	echo "TODO"

delete-cloudfunctions-webhooks:
	echo "TODO"

.PHONY: deps create-jenkins-jobs delete-jenkins-jobs deploy-cloudfunctions-webhooks delete-cloudfunctions-webhooks
