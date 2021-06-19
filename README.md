✅ Запуск приложения

         npx create-react-app .

✅ Настройка pre-commit хуков

1.  Установка зависимостей. Установить в проект следующие пакеты.

         npm install --save-dev prettier eslint

2.  Инициализация lint-staged и husky
    Выполнить в терминале следующую команду. Она установит и настроит husky и lint-staged в зависимости от инструментов качества кода из зависимостей проекта в package.json.

          npx mrm lint-staged

❗️ если ошибка, используй

          npx mrm@2 lint-staged

3.  Настройки VSCode
    Для комфортной работы, после установки плагинов, нужно добавить несколько настроек редактора для автосохранения и форматирования файлов.

         {
         "files.autoSave": "onFocusChange",
         "editor.formatOnSave": true,
         "editor.codeActionsOnSave": {
         "source.fixAll.eslint": true
         }
         }

✅ Деплой на GitHub Pages

1.  Выполнить команду :

          npm run build

2.  В package.json добавляем :

          "private": true,
         ➕ "homepage": "https://still-me.github.io/имя_репозитория",

3.  Еще раз выполнить команду:

          npm run build


4.  Установить пакет gh-pages выполнив команду:

          npm install --save gh-pages


5.  добавить скрипты

         "scripts": {
         ➕ "predeploy": "npm run build",
         ➕ "deploy": "gh-pages -d build",
         "start": "react-scripts start",
         "build": "react-scripts build",

6.  Для отправки на Github выполнить команду

          npm run deploy

✅ Установить normalize

1. установить пакет

        npm install modern-normalize

2. подключить в index.js

        import 'modern-normalize/modern-normalize.css';

✅ Оптимизированный путь к папкам SCSS

1. Создать файл .env
2. путь SASS_PATH=node_modules:src

❗️ При ошибке "cannot find module 'sass'", используй

      - npm add node-sass
