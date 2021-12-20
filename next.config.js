const path = require('path')
require('dotenv').config()

module.exports = {
    env: {
        NEXT_AUTH_URL: process.env.NEXT_AUTH_URL,
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        JWT_SECRET: process.env.JWT_SECRET,
    },
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
    },

    webpack: (config, { isServer }) => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    },
}