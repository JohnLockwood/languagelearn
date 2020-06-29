.PHONY:  up down show

up:
	aws cloudformation create-stack --stack-name LanguageLearnDB --template-body file://./aurora.cfn

show:
	aws cloudformation describe-stacks --stack-name LanguageLearnDB
	# aws cloudformation describe-stack-events --stack-name LanguageLearnDB

down:
	aws cloudformation delete-stack --stack-name LanguageLearnDB

update:
	aws cloudformation update-stack --stack-name LanguageLearnDB --template-body file://./aurora.cfn
