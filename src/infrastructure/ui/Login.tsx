import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState<string>("");

    return(
        <>
            <h1>ログインページ</h1>
        </>
    )
}

export default Login;