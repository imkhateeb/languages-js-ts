const Redis = require("ioredis");

module.exports = redisClient = new Redis({
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || "6379"
})

module.exports = connectRedisClient = () => {
    redisClient.on('connect', () => {
        console.log('Connected to Redis');
    })
    redisClient.on('error', (err) => {
        console.log('Error connecting to Redis', err);
    });
}