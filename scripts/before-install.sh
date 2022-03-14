#!/bin/bash

if [[ -n "$(find . -name "nvm.sh")" ]];
then
  echo "node is already install"
else
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  . ~/.nvm/nvm.sh
  nvm install 14.17.0
fi