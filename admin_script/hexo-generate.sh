dirname $0
cd `dirname $0`
time=$(date "+%Y-%m-%d %H:%M:%S")
cd ..
hexo g
git add --all
echo "add to git stash"
git commit -m "${time}"
git pull
git push origin master

