#!/bin/bash

HOME_DATABASE=$(pwd)/database
docker stop db_mongo
docker run --name db_mongo -d -p 27017:27017 -v "$HOME_DATABASE":/data/db mongo