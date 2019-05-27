FROM nginx:mainline

COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/conf.d /etc/nginx/conf.d

COPY --from=explorer /src/build /src

RUN echo "/usr/sbin/nginx -c /etc/nginx/nginx.conf -t" >> /root/.bash_history && \
    echo "alias ll='ls -la'" >> /root/.bashrc

CMD /usr/sbin/nginx -g 'daemon off;'
