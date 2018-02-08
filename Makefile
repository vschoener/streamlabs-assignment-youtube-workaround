build:
	docker-compose build

down:
	docker-compose down

logs:
	docker-compose logs -f

run: 
	docker-compose run --rm app
