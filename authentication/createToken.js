import jwt from 'jsonwebtoken';
const jwtToken = async(payload) => {

    const token = jwt.sign({ payload }, "seacretKey", { expiresIn: 300 })

    return token;
}

export default jwtToken;