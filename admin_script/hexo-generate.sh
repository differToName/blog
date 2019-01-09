dirname $0
cd `dirname $0`
time=$(date "+%Y-%m-%d %H:%M:%S")
cd ..
hexo clean
hexo g
gulp
echo "add to git stash"
git commit -a -m "${time}"
git pull
git push origin master

