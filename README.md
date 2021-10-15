Для верстки с нуля BOLT
=====================

Подготовил: [Александр Зиновьев](http://uzinok.ru/)
-----------------------------------

Команды
-----------------------------------

* gulp - сборка проекта и запуск сервера
* gulp build - сборка проекта (без карты)
* gulp opti_svg - оптимизация SVG перед созданием спрайта
* gulp sprite - создание SVG спрайта
* gulp webp_convert - конвертация графики в .webp (.jpg, .png => .webp)
* gulp opti_img - оптимизация графики
* gulp fonts - конвертация шрифтов: .ttf => .woff + .woff2

особенности
-----------------------------------

* js библиотеки хранятся в src/scripts/
* css библиотеки хранятся в src/css/
* svg для спрайта хранятся в resource/svg/
* .ttf файлы хранятся в resource/fonts/
* файл стилей, js код, html - минифицируются
* препроцессор стилей less
* есть карта less/js gulp-sourcemaps (для разработки)
* стили обновляются без перезагрузки страницы
* настраиваемые колонки grid.less (подключается в style.less)
* преобразовывает код ECMAScript 2015 и выше в совместимую версию JavaScript для более старых браузеров (babel).
* при необходимости можно подключить webpack. раскоментировать таск с webpack/закоментировать таск с babel

перед установкой сборщика необходимо:
-----------------------------------

* [устнаовить node.js](https://nodejs.org/) используется пакет npm
* [глобально установить gulp](https://gulpjs.com/) для работы команд gulp
* [глобально установить browser-sync](https://browsersync.io/) для работы виртуального сервера
