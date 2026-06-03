# webHz

**Підзаголовок:** Grid frequency monitoring web server  
**Шлях:** `D:\My_project\webHz`  
**Платформа:** Python + Flask + MySQL
**Парна система:** CrossZeroDetector (#11)

## Призначення

Веб-сервер для моніторингу та логування даних частоти мережі 50 Гц. Отримує дані від CrossZeroDetector (ESP32) і надає адмін-інтерфейс.

## Ключові функції

- REST API /frequency_data — повертає JSON з поточним значенням частоти
- Jinja2 web-форма /entry для введення параметрів
- Адмін-сторінка /admin — захищена @check_logged_in
- Перегляд логу /viewlog — таблиця MySQL: phrase, letters, ip, browser, result
- MySQL через UseDatabase context manager (DBcm.py) — exception-safe
- Auth middleware checker.py — Flask session
- Custom exceptions — ConnectionError, CredentialsError, SQLError

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | Python 3 |
| Framework | Flask |
| Templating | Jinja2 |
| Database | MySQL (mysql-connector-python) |
| Auth | Flask session |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->
