from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import socket


HOST = "0.0.0.0"
PORT = 8000


def local_addresses():
    names = set()
    try:
        names.add(socket.gethostbyname(socket.gethostname()))
    except OSError:
        pass

    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as probe:
            probe.connect(("8.8.8.8", 80))
            names.add(probe.getsockname()[0])
    except OSError:
        pass

    return sorted(address for address in names if address and not address.startswith("127."))


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript",
        ".css": "text/css",
        ".html": "text/html; charset=utf-8",
    }


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print("DayPlanner is running.")
    print(f"This device: http://localhost:{PORT}")
    for address in local_addresses():
        print(f"Other devices on the same Wi-Fi: http://{address}:{PORT}")
    print("Press Ctrl+C to stop.")
    server.serve_forever()
