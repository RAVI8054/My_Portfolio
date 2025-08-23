import dotenv from 'dotenv';

// to read all the environment variables.
dotenv.config(); 

console.log("port from env file is : ",process.env.PORT);
export const PORT=process.env.PORT;


console.log("gmail user from dotenv is : ", process.env.GMAIL_USER);
export const GMAIL_USER=process.env.GMAIL_USER;

console.log("gmail pass from dot env is : ", process.env.GMAIL_PASS);
export const GMAIL_PASS=process.env.GMAIL_PASS;
