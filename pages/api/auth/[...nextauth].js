import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify"

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, JWT_SECRET, NEXTAUTH_URL } = process.env

const refreshAccessToken = async(token) => {
    try {
        spotifyApi.setAccessToken(token.accessToken)
        spotifyApi.setRefreshToken(token.refreshToken)

        const { body: refreshedToken } = await spotifyApi.refreshAccessToken()

        return {
            ...token,
            accessToken: refreshedToken.access_token,
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refresh_token
        }
        
    } catch (error) {
        console.log(error);
        
        return {
            ...token,
            error: "RefreshAccessTokenError"
        }
    }
}

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        SpotifyProvider({
            clientId: SPOTIFY_CLIENT_ID,
            clientSecret: SPOTIFY_CLIENT_SECRET,
            authorization: LOGIN_URL
        }),
    ],
    secret: JWT_SECRET,
    site: NEXTAUTH_URL,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({token, account, user}){
            // Initial SIgnIn
            if(account && user){
                return {
                    ...token,
                    accessToken: account.access_token,
                    accessTokenExpires: account.expires_at * 1000,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    ...user
                }
            }
    
            // Return previous token if the access token has not expired yet
            if(Date.now() < token.accessTokenExpires){
                return token
            }

            // Access token expired, Refesh token
            return await refreshAccessToken(token)
        },

        async session({session, token}) {
            session.user.accessToken = token.accessToken,
            session.user.refreshToken = token.refreshToken,
            session.user.username = token.username
            return session;
        }
    }
})