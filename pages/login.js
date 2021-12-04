import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

const login = ({ providers }) => {
    return (
        <div>
            This is login page
        </div>
    )
}

export default login

export async function getServerSideProps(){
    const providers = await getProviders()

    return{
        props: {
            providers
        }
    }
}