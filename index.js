import { log } from 'node:console';
import express from 'express';
import core from 'cors';
import { logIn } from './authController/login.js';
import VerifyToken from './authentication/verifyToken.js';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
    core({
        origin: "*",
    })
)


//routes
app.post('/login', (req, res) => logIn(req, res));
app.get('/verify', (req, res) => VerifyToken(req, res));

app.listen(PORT, (error) => error ? log("Server Error: " + error) : log("Server Running...." + PORT));