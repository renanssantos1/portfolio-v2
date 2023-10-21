start:  ## Start up applications
	docker compose -f docker-compose-dev.yml up

clean:  ## Remove all images and volumes
	docker compose down --rmi all --volumes
