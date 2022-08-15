<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


##  CBAQUE_REPOS

## Installation

1. Clonar proyecto
2. ``` npm install ```
3. reemplazar ``` .env-template ``` por ``` .env ```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```
## EXECUTE EJERCICIO 1
``` http://localhost:3000/api/repository-status ```

## EXECUTE EJERCICIO 2
### NEW ORGANIZATION
1. ``` http://localhost:3000/api/organization ```
* TYPE POST parameters JSON raw body example:
``` 
  {
    "name": "CISNE II"
  } 
``` 

### ALL ORGANIZATION
2. ``` http://localhost:3000/api/organization ```
* TYPE GET 


### DELETE ORGANIZATION
3. ``` http://localhost:3000/api/organization/id ```
* TYPE DELETE 


### EDIT ORGANIZATION
4. ``` http://localhost:3000/api/organization/id ```
* TYPE PUTCH parameters JSON raw body example:
``` 
  {
    "name": "CISNE II"
  } 
```


