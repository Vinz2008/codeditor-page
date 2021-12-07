from gevent import monkey
monkey.patch_all()
from gevent.pywsgi import WSGIServer
from app import python_requests
http_server = WSGIServer(('0.0.0.0', 5000), python_requests())
http_server.serve_forever()
