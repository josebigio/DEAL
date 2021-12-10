FROM node:16
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
EXPOSE 1337
RUN npm i
CMD ["npm", "run", "start"]