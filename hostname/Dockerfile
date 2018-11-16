FROM node:10

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm ci

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]
