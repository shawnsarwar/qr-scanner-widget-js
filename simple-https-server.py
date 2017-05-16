# taken from http://www.piware.de/2011/01/creating-an-https-server-in-python/
# generate server.xml with the following command:
#    openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes
# run as follows:
#    python simple-https-server.py
# then in your browser, visit:
#    https://localhost:4443

import BaseHTTPServer, SimpleHTTPServer
import ssl


print "this is only for testing, but is broadcasting on 443, so be careful."

httpd = BaseHTTPServer.HTTPServer(('0.0.0.0', 443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./server.pem', server_side=True)
try:
    httpd.serve_forever()
except IOError, e:
    print "you need to create a cert called server.pem and stick it in this folder."
    print "this should do the trick:"
    print "openssl req -new -x509 -keyout server.pem -out server.pem -days 365 -nodes"
    print "see: https://gist.github.com/dergachev/7028596 for more"
