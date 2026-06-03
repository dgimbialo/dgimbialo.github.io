# webHz

**-ƒ-û-¦-+-¦-¦-+-+-+-¦-+-¦:** Grid frequency monitoring web server  
**-¿-+-Å-à:** `D:\My_project\webHz`  
**-ƒ-+-¦-é-ä-+-Ç-+-¦:** Python + Flask + MySQL
**-ƒ-¦-Ç-+-¦ -ü-+-ü-é-¦-+-¦:** CrossZeroDetector (#11)

## -ƒ-Ç-+-+-+-¦-ç-¦-+-+-Å

-Æ-¦-¦--ü-¦-Ç-¦-¦-Ç -¦-+-Å -+-+-+-û-é-+-Ç-+-+-¦-â -é-¦ -+-+-¦-â-¦-¦-+-+-Å -¦-¦-+-+-à -ç-¦-ü-é-+-é-+ -+-¦-Ç-¦-¦-û 50 -ô-å. -P-é-Ç-+-+-â-ö -¦-¦-+-û -¦-û-¦ CrossZeroDetector (ESP32) -û -+-¦-¦-¦-ö -¦-¦-+-û-+--û-+-é-¦-Ç-ä-¦-¦-ü.

## -Ü-+-Ä-ç-+-¦-û -ä-â-+-¦-å-û-ù

- REST API /frequency_data GÇö -+-+-¦-¦-Ç-é-¦-ö JSON -+ -+-+-é-+-ç-+-+-+ -+-+-¦-ç-¦-+-+-Å-+ -ç-¦-ü-é-+-é-+
- Jinja2 web--ä-+-Ç-+-¦ /entry -¦-+-Å -¦-¦-¦-¦-¦-+-+-Å -+-¦-Ç-¦-+-¦-é-Ç-û-¦
- -É-¦-+-û-+--ü-é-+-Ç-û-+-¦-¦ /admin GÇö -+-¦-à-+-ë-¦-+-¦ @check_logged_in
- -ƒ-¦-Ç-¦-¦-+-Å-¦ -+-+-¦-â /viewlog GÇö -é-¦-¦-+-+-å-Å MySQL: phrase, letters, ip, browser, result
- MySQL -ç-¦-Ç-¦-+ UseDatabase context manager (DBcm.py) GÇö exception-safe
- Auth middleware checker.py GÇö Flask session
- Custom exceptions GÇö ConnectionError, CredentialsError, SQLError

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3 |
| Framework | Flask |
| Templating | Jinja2 |
| Database | MySQL (mysql-connector-python) |
| Auth | Flask session |

## -£-¦-¦-û-¦

### Photos
<!-- Place photos in foto/ folder -->
<!-- Then specify paths in media.foto in assets/js/data.js -->

### Videos
<!-- Place videos in video/ folder -->
<!-- Then specify paths in media.video in assets/js/data.js -->

## -¥-+-é-¦-é-¦-+

<!-- -ö-+-¦-¦-é-¦-+-¦-û -+-+-é-¦-é-¦-+, -+-+-ü-+-+-¦-+-+-Å, -ü-¦-Ç-û-+-ê-+-é-+, -¦-¦-Ç-ü-û-ù -->

