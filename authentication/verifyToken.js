import jwt from 'jsonwebtoken';
import db from '../connection/connection.js';

const VerifyToken = (req, res) => {
    const authHeader = req.headers['authorization'];

    const tokenArray = authHeader.split(' ');

    if (tokenArray.length === 2 && tokenArray[0] === 'Bearer') {
        const token = tokenArray[1];
        try {
            jwt.verify(token, "seacretKey", async(error, decoded) => {
                if (error) {
                    console.log("Not autoricated");
                } else {
                    // console.log(decoded.payload);
                    const email = decoded.payload.email;
                    const nic = decoded.payload.id;
                    try {
                        const [result, fields] = await db.query("SELECT * FROM `employee` WHERE `email`=? AND `nic`=? ", [email, nic]);
                        // console.log(result);
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        return res.end(JSON.stringify({

                            message: "Sucsess",
                            userData: result[0],
                        }));
                    } catch (error) {
                        console.log(error);
                    }


                    // res.writeHead(200, { 'Content-Type': 'application/json' });
                    // return res.end(JSON.stringify({
                    //     message: "Sucsess",
                    //     user: decoded.payload
                    // }));

                }
            })
        } catch (error) {
            console.log(error);
        }
    } else {
        console.error('Invalid Bearer token format');
    }



}
export default VerifyToken;