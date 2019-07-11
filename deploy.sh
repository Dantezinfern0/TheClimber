dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t rock-climbing-log-and-planner-image ./bin/release/netcoreapp2.2/publish

docker tag rock-climbing-log-and-planner-image registry.heroku.com/rock-climbing-log-and-planner/web

docker push registry.heroku.com/rock-climbing-log-and-planner/web

heroku container:release web -a rock-climbing-log-and-planner

# sudo chmod 755 deploy.sh
# ./deploy.sh