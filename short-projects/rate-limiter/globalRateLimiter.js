const fs = require("fs")

const mapping = new Map();

const logRequest = (reqMade) => {
    fs.appendFile("./logs", `LOG-${Date.now()}: Request made - ${reqMade}\n`, (err) => {});
}

const rateLimiter = ({windowMs, totalToken, message}) => {

    return (req, res, next) => {
        let ipAddr = JSON.stringify(req.ip);
        const metadata = mapping.get(ipAddr);
        logRequest(metadata?.tokenUsed || 0);
        if (mapping.has(ipAddr)) {
            if (metadata.expiry > Date.now()) {
                if (metadata.tokenUsed >= totalToken) {
                    return res.json({
                        msg: message,
                        success: false,
                    })
                } else {
                    mapping.set(ipAddr, {
                        expiry: metadata.expiry,
                        tokenUsed: metadata.tokenUsed + 1,
                    })
                }
            } else {
                mapping.set(ipAddr, {
                    expiry: Date.now() + windowMs,
                    tokenUsed: 1,
                });
            }
        } else {
            mapping.set(ipAddr, {
                expiry: Date.now() + windowMs,
                tokenUsed: 1,
            });
        }
        next();
    }
}

module.exports = rateLimiter;