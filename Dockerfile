FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g vite
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
RUN npm ci --only=production
ENV PORT=5173
EXPOSE ${PORT}
CMD [ "npm","run","dev" ]



