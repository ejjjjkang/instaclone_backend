import * as jwt from 'jsonwebtoken'
import client from '../client'

export const getUser = async (token) => {
    try { 
        if (!token) {
            return null;
        }
        const verifiedToken = await jwt.verify(token, process.env.SECRET_KEY);)
    }catch  {
        
    }
}