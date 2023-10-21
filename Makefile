start:  ## Start up applications
	docker compose -f docker-compose-dev.yml up --force-recreate

clean:  ## Remove all images and volumes
	docker compose down --rmi all --volumes
