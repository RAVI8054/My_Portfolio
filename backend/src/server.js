import express from 'express';
import { PORT } from './config/serverConfig.js';
import cors from 'cors';
import { apiRouter } from './routes/api_routes.js';

const app= express();

// inbuilt middleware 

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));

// using cors to accept request from frontend.

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://portfolio-frontend-two-sigma.vercel.app' 
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));




// testing api

app.get('/', (req, res) => {
    res.send("Root route working!");
});

app.get('/ping', function callback(req, res) {
    console.log("ping to portfolio server suscessfully");
    return res.send("<h1>Hii your request is pinged suscessfully on portfolio server</h1>")
});


// api router -- then contact router
app.use('/api',apiRouter);

// listening for incoming request works in local machine but on railway it says 502 because node by default listen 127.0.0.1 but using 0.0.0.0 so that my server can listen from any where just for testing..
/*
app.listen(PORT,function callback(){
    console.log("server is listening on port : ",PORT);
})
*/

app.listen(PORT, '0.0.0.0', function callback() {
    console.log("server is listening on port : ", PORT);
});



