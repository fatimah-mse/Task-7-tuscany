import Form from '@/components/Form'
import React from 'react'

export default function SignUp() {
    return (
        <Form
            title={'Create Account'}
            signup={true}
            signin={false}
            btn={'Sign Up'}
            link={'Sign In'}
            Plink={'Don’t have an account ?'}
            href={'/login'}
        />
    )
}
