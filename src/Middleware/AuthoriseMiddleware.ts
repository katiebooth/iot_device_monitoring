import { timingSafeEqual } from "crypto";
import { Request, Response, NextFunction } from "express"
import apiConfig from "../config";

// basic authorisation mechanism to ensure only known client can make requests to server
// this should be extended to check JWTs match a user-specific session
const authoriseToken = async(req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        console.log("Authorisation header missing")
        res.status(401).json({
            error: "Authorisation header missing"
        })
        return;
    }
    const match = /^Bearer ([^\s]+)$/i.exec(authHeader);

  if (!match) {
    res.status(401).json({
      error: "Invalid authorization format"
    });
    return;
  }

  const token = match[1];
  const expectedToken = apiConfig.apiToken;

  if (!expectedToken) {
    res.status(500).json({
      error: "Authentication not configured"
    });
    return;
  }

  const provided = Buffer.from(token);
  const expected = Buffer.from(expectedToken);

  if (
    provided.length !== expected.length ||
    !timingSafeEqual(provided, expected)
  ) {
    res.status(401).json({
      error: "Invalid token"
    });
    return;
  }

  next();
}

export default authoriseToken