FROM nginx:alpine
RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY . .
COPY nginx.conf /etc/nginx/conf.d/default.conf
ENV ALPINE_MIRROR "http://dl-cdn.alpinelinux.org/alpine"
RUN echo "${ALPINE_MIRROR}/edge/main" >> /etc/apk/repositories
RUN apk add --no-cache nodejs-current npm --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"
RUN node --version
RUN apk update
RUN npm install
RUN npm run build
RUN mv /app/build/* /usr/share/nginx/html/
#RUN npm install