FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Install ts-node and typescript globally in the container
RUN npm install -g ts-node typescript

COPY . .

CMD ["ts-node", "--transpile-only", "src/index.ts"]


