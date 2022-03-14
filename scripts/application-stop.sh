#!/bin/bash
if [[ -n "$(docker ps -a | grep was)" ]];
then
  echo "Server is running"
  docker rm -f was
fi