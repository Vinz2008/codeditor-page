from gevent.pywsgi import WSGIServer
from app import python_requests
http_server = WSGIServer(('', 5000), python_requests())
http_server.serve_forever()
