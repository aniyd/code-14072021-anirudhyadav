# code-14072021-anirudhyadav

## Steps to setup the project:
1. Clone the repository.
2. cd code-14072021-anirudhyadav
3. Install the dependecies using 
    `npm i` OR `npm install`
4. To start the server in development mode:
    ```npm run start:dev```
5. Server will start on PORT `3672`
6. API to count the number of overweight people:
    ```
    http://localhost:3672/api/bmi/count/overweight
    ** request body data: **
    {
        "data" [
            "Gender": string,
            "HeightCm": number,
            "WeightKg": number
        ]
    }
    ** Successful Response **
    200 Status code
    number 
    ```