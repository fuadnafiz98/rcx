FROM gcc:4.9

COPY . /usr/src/sol

WORKDIR /usr/src/sol

ENV filePath=''

# CMD ls -la
CMD gcc -std=c99 -o ${filePath} ${filePath}.c && ./${filePath}

