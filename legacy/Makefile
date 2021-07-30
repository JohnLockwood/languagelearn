.PHONY: up down tfcheck

up:
	set | grep POSTGRES > .env
	docker-compose   up -d 

down:
	docker-compose down

tfcheck: 	
	terraform -chdir=terraform plan -out=plan.out
	terraform -chdir=terraform show -json plan.out | jq . > plan.json


