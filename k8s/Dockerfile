ARG VERSION=1.17.8-alpine
FROM nginx:$VERSION
COPY ./build ./usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
RUN rm /etc/nginx/nginx.conf
COPY ./k8s/nginx/conf.d/default.conf /etc/nginx/conf.d/
COPY ./k8s/nginx/nginx.conf /etc/nginx/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
