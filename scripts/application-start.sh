#!/bin/bash
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 673306085779.dkr.ecr.ap-northeast-2.amazonaws.com
docker run --name was -d -p 80:80 673306085779.dkr.ecr.ap-northeast-2.amazonaws.com/smc-badminton:latest