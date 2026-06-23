#!/usr/bin/env python3
"""Local dev server with caching fully disabled.

`python -m http.server` lets the browser cache HTML/JS, so edits to project.md
(and the regenerated data.js) often don't show up until a hard refresh. This
server sends no-cache headers on every response, so a plain reload always pulls
the latest files.

Usage:  python serve_nocache.py [port]   (default port 8090)
"""

import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def handle_one_request(self):
        # The browser aborts in-flight requests when it navigates away quickly;
        # swallow the resulting disconnect errors so they don't spam the log.
        try:
            super().handle_one_request()
        except (ConnectionAbortedError, ConnectionResetError, BrokenPipeError):
            self.close_connection = True

    def log_message(self, fmt, *args):
        # Keep the request log quiet (only our own prints / real errors show).
        pass


def main() -> None:
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8090
    try:
        server = HTTPServer(("", port), NoCacheHandler)
    except OSError:
        # Port already taken — a server is probably already running. The site is
        # still reachable on that port, so this isn't a fatal error.
        print(f"Port {port} is already in use - a server is likely already running.")
        print(f"Open the site at http://localhost:{port}/")
        return
    print(f"Serving with no-cache headers on http://localhost:{port}")
    print("Press Ctrl+C to stop the server.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        server.server_close()


if __name__ == "__main__":
    main()
