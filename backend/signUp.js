import { Client } from "undici";

const client = new Client('https://ap-south-1.aws.data.mongodb-api.com');

//Sign Up...

//these 3 details will be entered by user when user click on sign-up
export async function SignUp(username,password,confirmPassword){
    //first check if username exist or not
    //userPresent = true meanse username is present we can't use this username..you need to login instead of sign-up
    //if userPresent other than true that means we can use this username.
    const userPresent  = await checkUsernamePresent(username);
    if(userPresent)
        return 'Username exist please login';
    else if(password != confirmPassword)
        return 'Confirm Password not match';
    else
      {
        //Now if above both condition fail we can add user in database..
      await client.request({
            path: '/app/data-mpwjozs/endpoint/data/v1/action/insertOne',
            method: 'POST',
            body: JSON.stringify({
                dataSource: "Backlog-7836",
                database: "OPA",
                collection: "BookingApp",
                document: {
                            "username": username,
                            "password": password
                        }
            }),
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'IVuePUQxWu7R3vjqL2TtdaLl85kvC1CRo4kHTJ3ySKd1D6dNOv90O6CkA4am7HpG',
            }
        });
       return 'User is added successfully'
    } 
}

//function to check username is already exist or not
async function checkUsernamePresent(username){
    const respone =  await client.request({
        path: '/app/data-mpwjozs/endpoint/data/v1/action/findOne',
        method: 'POST',
        body: JSON.stringify({
            dataSource: "Backlog-7836",
            database: "OPA",
            collection: "BookingApp",
            "filter": { "username": username }
        }),
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'IVuePUQxWu7R3vjqL2TtdaLl85kvC1CRo4kHTJ3ySKd1D6dNOv90O6CkA4am7HpG',
        }
    });
const data = JSON.parse(JSON.stringify(await respone.body.json()));

//username present
if(data.document != null)
    return true;

}

//Isse uncomment krk run krk dekhna alg alg parameter pass krk kya aata h ..
console.log(await SignUp('Rishi','2626','2626'))

//TO Run this file in terminal run command - node signUp.js

//To see the DB use this link
//https://cloud.mongodb.com/v2/663dbf59aa220f1f101eedf2#/metrics/replicaSet/6645ea2f5219de6bad1288cf/explorer/OPA/BookingApp/find
//MongoDB mein login krna hoga then use this link
//email - sinhaneha570@gmail.com
//password - rj07ca1720@N