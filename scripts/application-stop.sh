#!/bin/bash
if [[ -n "$(docker ps -a | grep was)" ]];
then
  echo "Server is running"
  docker rm -f was
  docker rmi 673306085779.dkr.ecr.ap-northeast-2.amazonaws.com/smc-badminton:latest
fi