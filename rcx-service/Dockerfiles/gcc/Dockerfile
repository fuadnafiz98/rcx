FROM alpine:3.14

RUN apk update && apk upgrade

RUN apk add --no-cache gcc musl-dev

COPY . /usr/src/sol

WORKDIR /usr/src/sol 

ENV filePath=''

CMD gcc -std=c99 -o ${filePath} ${filePath}.c && ./${filePath}
