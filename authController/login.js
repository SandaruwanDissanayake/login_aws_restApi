import jwtToken from "../authentication/createToken.js";
import db from "../connection/connection.js";
export const logIn = async(req, res) => {

    const { email, password } = req.body;

    if (email === null || password === null) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
            error: "Email and password are required fields",
        }));
    } else {

        try {
            const [result, fields] = await db.query("SELECT * FROM `employee` WHERE `email` = ? AND `password` = ?", [email, password]);
            // console.log(result.length);

            if (result.length !== 0) {

                const email = result[0].email;
                const id = result[0].nic;

                const payload = { email, id }
                const token = await jwtToken(payload);

                // console.log(token);

                // console.log(result[0]);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({
                    login: true,
                    message: "Sucsess",
                    token: token,
                }));
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                return res.end(JSON.stringify({
                    login: false,
                    message: "Not a valid user",
                }));
            }
        } catch (error) {
            console.log("Data error" + error);
        }


    }


}