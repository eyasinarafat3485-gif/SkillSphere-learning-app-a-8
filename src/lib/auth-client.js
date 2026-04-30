import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://skill-sphere-learning-app-a-8.vercel.app"  // live link hobe akhne
})

export const { signIn, signUp, useSession } = createAuthClient()

// https://skill-sphere-learning-app-a-8.vercel.app / http://localhost:3000

// https://skill-sphere-learning-app-a-8.vercel.app/data.json API