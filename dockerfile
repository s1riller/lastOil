# так же берём готовый контейнер с node на основе alpine
FROM node:18-alpine as build
# Задаем рабочий каталог
WORKDIR /usr/src/app
# Копируем туда наши json файлы
ADD *.json ./
# Устанавливаем все пакеты и зависимости указанные в json
RUN npm install
WORKDIR /app
# Добавляем каталоги public и src. 
# можно воспользоваться командой COPY . . но если вы синхронизировали node_modules,
# то будете ждать пока зальётся этот каталог целиком. 
# да и потом могут возникнуть проблемы.
ADD ./public ./public
ADD ./src ./src
RUN npm run build
EXPOSE 8080
CMD [ "http-server", "dist" ]
