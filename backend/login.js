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

