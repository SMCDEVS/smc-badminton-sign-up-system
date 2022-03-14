#!/bin/bash

yum update -y

sed 's/PasswordAuthentication no/PasswordAuthentication yes/' -i /etc/ssh/sshd_config
echo "1234" | passwd --stdin ec2-user
systemctl restart sshd

yum install ruby -y
wget https://aws-codedeploy-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/latest/install
chmod +x /install
/install auto
