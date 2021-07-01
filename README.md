# TASKS

* user will send code
  * I will save it to `${folder_name}/sol.c` 
  * pass this `folder_name` as parameter of the dockerfile?
* Dockerfile 
  * gcc
  * filePath

* create a gcc `dockerfile` that will read `sol.c` file from mounded folder 

* work in main folder
* mount the foldername 


# Running docker 

```sh
docker run --rm --mount \
type=bind,source="$(pwd)"/codes/first,target=/app \
-e filePath='in.txt' basic:0.0
```

```

 docker run --rm --mount type=bind,source="$(pwd)"/,target=/app -e filePath='sol' basic:0.1

```

## Project Planning

- this will be an **API** 
* typical typescirpt **API** configuration

### Future work
* use `jwt` authentication key to verify request.

