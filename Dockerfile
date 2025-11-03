FROM node:18

# Update and install security updates
RUN apt-get update && apt-get upgrade -y

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
