up:
	set | grep POSTGRES > .env
	docker-compose   up -d 

down:
	docker-compose down

