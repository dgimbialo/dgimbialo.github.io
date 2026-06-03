# EAGLE ULP Pin Analyzer

**Підзаголовок:** Schematic pin-connection analysis script  
**Шлях:** `D:\My_project\eagle-upl-scripts`  
**Платформа:** EAGLE ULP / Autodesk EAGLE

## Призначення

Скрипт-аналізатор для EAGLE Schematic Editor: аналізує які піни Source компонента з'єднані з Target, а які вільні (N/C).

## Ключові функції

- Автозбір компонентів — schematic(SCH) { SCH.parts(P) } — name + value список
- Аналіз netlist — для кожного піна Source пошук net-з'єднань із Target
- Фільтрація та сортування — All/Connected/Free N/C; 7 критеріїв сортування
- HTML-рендеринг у EAGLE viewer з кольоровим маркуванням (зелений/сірий)
- Мульти-формат експорту — CSV, TXT, HTML
- Statistics line — лічильник connected/free пінів

## Технологічний стек

| Компонент | Технологія |
|---|---|
| Мова | EAGLE ULP (C-like DSL) |
| Платформа | Autodesk EAGLE / Fusion 360 Electronics |
| Output | HTML, CSV, TXT |

## Медіа

### Фото
<!-- Розмістіть фотографії у папці foto/ -->
<!-- Потім вкажіть шляхи у media.foto в assets/js/data.js -->

### Відео
<!-- Розмістіть відеофайли у папці video/ -->
<!-- Потім вкажіть шляхи у media.video в assets/js/data.js -->

## Нотатки

<!-- Додаткові нотатки, посилання, скріншоти, версії -->
