.PHONY:  up down show

up:
	aws cloudformation create-stack --capabilities CAPABILITY_IAM --stack-name LanguageLearn --template-body file://./main.yaml

show:
	aws cloudformation describe-stacks --stack-name LanguageLearn 
	# aws cloudformation describe-stack-events --stack-name LanguageLearn 

down:
	aws cloudformation delete-stack --stack-name LanguageLearn 
