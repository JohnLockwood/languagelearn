echo "Stopping server..."
(lsof -t -i tcp:80 | xargs kill -9) || true
echo "Server stopped"
