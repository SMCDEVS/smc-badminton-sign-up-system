#!/bin/bash
if [[ -n "$(netstat -ano | grep tcp | grep 80)" ]];
then
  echo "Server is running"
  killall smc-badminton-sign-up-system-linux
fi