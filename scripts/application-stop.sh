#!/bin/bash
if [[ -n "$(netstat -ano | grep tcp | grep 80)" ]];
then
  echo "Server is running"
  fuser -k -n tcp 80
fi