# Welcome to flight service 

## Project Setup 
    - clone the project on your local
    - execute npm install on the same path as of your root directory of the downloaded project
    - create a '.env' file in the root directory and add the following environment variable
        - `PORT=3000`
    -inside the 'src/conig' folder create a new file 'config.json' and then add the following  piece of json

    ```
{
  "development": {
    "username": "your db login name",
    "password": "your password",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
    ```
    - once you have added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`

    `npx sequelize db:migrate`
    ```
    ```
## DB Design
    - Airplane Table
        -Id, Model number, capacity, created_at, updated_at
    - Flight Table
        -Id, src_airport_id, dest_airport_id, departure_date, arrival_date, departure_time, arrival_time
    - Airport Table
        -Id, Name, City_id, Address
    - City Table
        -Id, Name
    ```

    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airport but one airport belongs to a city
    - One airport can have many flights, but a flight belongs to one airport



## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
Relationship -> City has many airports and Airport belongs to a city(one to many)

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer 
```