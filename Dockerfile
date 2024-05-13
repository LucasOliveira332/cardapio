FROM postgres:16

ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123

WORKDIR /mnt/postgres

CMD ["docker-entrypoint.sh", "postgres"]