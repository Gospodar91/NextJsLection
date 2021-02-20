const dotenvLoad = require("dotenv-load");
dotenvLoad();
const nextConfig = {
    env: {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_DATABASE: process.env.DB_DATABASE,
        DB_PORT: process.env.DB_PORT,
        SERVER_URL:process.env.SERVER_URL
    },
};

module.exports = nextConfig;
