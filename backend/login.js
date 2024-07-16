import { Client } from "undici";

const client = new Client('https://ap-south-1.aws.data.mongodb-api.com');

//Login...
export async function login(username,password){
    if(username=='')
        return 'enter username';
    else if(password=='')
        return 'enter password';
    else
       {
      const response=  await client.request({
            path: '/app/data-mpwjozs/endpoint/data/v1/action/findOne',
            method: 'POST',
            body: JSON.stringify({
                dataSource: "Backlog-7836",
                database: "OPA",
                collection: "BookingApp",
                filter: 
                { 
                    "username": username,
                    "password" : password  

                 }
            }),
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'IVuePUQxWu7R3vjqL2TtdaLl85kvC1CRo4kHTJ3ySKd1D6dNOv90O6CkA4am7HpG',
            }
        });
        const data = JSON.parse(JSON.stringify(await response.body.json()));
       if(data.document != null)
        {
        return 'login successfully'}
       else
          return 'User not exist'
       }

}

//console.log(await login('Neha','1234'));

//TO Run this file in terminal run command - node login.js

//To see the DB use this link
//https://cloud.mongodb.com/v2/663dbf59aa220f1f101eedf2#/metrics/replicaSet/6645ea2f5219de6bad1288cf/explorer/OPA/BookingApp/find
//Try to modify data and then see the response for better understanding
//MongoDB mein login krna hoga then use this link
//email - sinhaneha570@gmail.com
//password - rj07ca1720@N