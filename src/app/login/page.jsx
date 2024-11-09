import Form from "@/components/Form";

export default function Login() {
    return (
        <Form 
            title={'Login'}
            signup={false}
            signin={true}
            btn={'Sign In'}
            link={'Sign Up'}
            Plink={'Don’t have an account ?'}
            href={'/signup'}
        />
    )
}
