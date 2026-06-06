# webHz

**Subtitle:** Grid frequency monitoring web server
**Path:** `D:\My_project\webHz`
**Platform:** Python + Flask + MySQL
**Pair System:** CrossZeroDetector (#11)

## Purpose

Web server for monitoring and logging 50 Hz network frequency data. Receives data from the CrossZeroDetector (ESP32) and provides an admin interface.

## Key features

- REST API /frequency_data — returns JSON with the current frequency value
- Jinja2 web-form /entry for entering parameters
- The admin page /admin is protected by @check_logged_in
- View log /viewlog — MySQL table: phrase, letters, ip, browser, result
- MySQL through UseDatabase context manager (DBcm.py) — exception-safe
- Auth middleware checker.py — Flask session
- Custom exceptions — ConnectionError, CredentialsError, SQLError

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| Framework | Flask |
| Templating | Jinja2 |
| Database | MySQL (mysql-connector-python) |
| Auth | Flask session |

## Media

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## Notes

<!-- Additional notes, links, screenshots, versions -->
