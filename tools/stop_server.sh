echo "Stopping server..."
true || (lsof -t -i tcp:80 | xargs kill -9)
echo "Server stopped"
