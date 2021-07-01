FROM alpine:3.14

RUN apk update && apk upgrade

RUN apk add --no-cache gcc musl-dev g++

COPY . /usr/src/sol

WORKDIR /usr/src/sol 

ENV filePath=''

CMD g++ -std=c++17 -o ${filePath} ${filePath}.c && ./${filePath}
