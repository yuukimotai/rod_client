import { useState } from 'react';

import AuthRepository from '../../adapters/gateways/AuthRepository.ts'
import LoginUsecase from '../../usecases/LoginUsecase.ts'

function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const inputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const authRepository = new AuthRepository();
        const loginUsecase = new LoginUsecase(authRepository);
        const result = await loginUsecase.execute(email, password);
        console.log(result)
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col rounded border border-lime-500 p-20'>
            <input onChange={inputEmailChange} name="email"
                    value={email} type='email' className='rounded border border-lime-500 mb-5'/>
            <input onChange={inputPasswordChange} name="password"
                    value={password} type='password' className='rounded border border-lime-500 mb-14'/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;