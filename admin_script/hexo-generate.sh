#!/usr/bin/env sh
time=$(date "+%Y-%m-%d %H:%M:%S")
cd ..
git add --all
echo "add to git stash"
git commit -m "${time}"
git pull
git push origin master

