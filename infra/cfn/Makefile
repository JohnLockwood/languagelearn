.PHONY:  up down show

up:
	aws cloudformation create-stack --stack-name LanguageLearn --template-body file://./main.cfn

show:
	aws cloudformation describe-stacks --stack-name LanguageLearn 
	aws cloudformation describe-stack-events --stack-name LanguageLearn 

down:
	aws cloudformation delete-stack --stack-name LanguageLearn 
