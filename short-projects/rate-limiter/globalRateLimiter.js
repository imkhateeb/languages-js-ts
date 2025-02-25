const fs = require("fs")

const logRequest = (reqMade, reqUrl) => {
    fs.appendFile("./logs", `LOG-${Date.now()}: Request made - ${reqMade}\n, URL - ${reqUrl}`, (err) => {});
}

const rateLimiter = ({windowMs, totalToken, message, mapping}) => {


    return (req, res, next) => {
        const reqUrl = req.url.path;
        let ipAddr = JSON.stringify(req.ip);
        const metadata = mapping.get(ipAddr);
        logRequest(metadata?.tokenUsed || 0, reqUrl);
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