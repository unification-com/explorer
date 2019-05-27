.DEFAULT_GOAL := all


all:
	docker build -f Docker/Dockerfile -t explorer .

run:
	docker run -it explorer /bin/bash

up:
	docker-compose -f Docker/docker-compose.yml up
