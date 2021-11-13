import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
require('dotenv').config();
const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (request: Request, response: Response, next: NextFunction) => {
    const authToken = request.body.token;

    if (!authToken) {
        response.status(403).send("A token is required for authentication");
        return;
    }
    try {
        const decoded = jwt.verify(authToken, jwtSecret);
        response.user = decoded;
    } catch (err) {
        response.status(401).send("Invalid Token");
        return;
    }
    return next();
}

export default verifyToken;